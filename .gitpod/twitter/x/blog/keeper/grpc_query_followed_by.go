package keeper

import (
	"context"

	"github.com/cosmonaut/blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FollowedBy(goCtx context.Context, req *types.QueryFollowedByRequest) (*types.QueryFollowedByResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Define a variable that will store a list of posts
	var following_list []string

	// Get the key-value module store using the store key (in this case store key is "chain")
	store := ctx.KVStore(k.storeKey)

	// Get the part of the store that keeps posts (using post key, which is "Post-value-")
	followStore := prefix.NewStore(store, []byte(types.FollowKey))

	// Get the post ID
	creator := req.Creator

	// Paginate the posts store based on PageRequest
	pageRes, err := query.Paginate(followStore, req.Pagination, func(key []byte, value []byte) error {
		var following types.Follow
		if err := k.cdc.Unmarshal(value, &following); err != nil {
			return err
		}

		if following.Creator == creator {
			following_list = append(following_list, following.Following)
		}

		return nil
	})

	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryFollowedByResponse{Following: following_list, Pagination: pageRes}, nil
}
