package keeper

import (
	"context"

	"github.com/cosmonaut/blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FollowAll(c context.Context, req *types.QueryAllFollowRequest) (*types.QueryAllFollowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var follows []types.Follow
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	followStore := prefix.NewStore(store, types.KeyPrefix(types.FollowKey))

	pageRes, err := query.Paginate(followStore, req.Pagination, func(key []byte, value []byte) error {
		var follow types.Follow
		if err := k.cdc.Unmarshal(value, &follow); err != nil {
			return err
		}

		follows = append(follows, follow)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFollowResponse{Follow: follows, Pagination: pageRes}, nil
}

func (k Keeper) Follow(c context.Context, req *types.QueryGetFollowRequest) (*types.QueryGetFollowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	follow, found := k.GetFollow(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetFollowResponse{Follow: follow}, nil
}
