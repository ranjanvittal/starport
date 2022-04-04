package keeper

import (
	"context"

	"github.com/cosmonaut/blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateFollow(goCtx context.Context, msg *types.MsgCreateFollow) (*types.MsgCreateFollowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	// Create variable of type comment
	var follow = types.Follow{
		Creator:   msg.Creator,
		Following: msg.Following,
	}
	id := k.AppendFollow(ctx, follow)

	return &types.MsgCreateFollowResponse{Id: id}, nil
}
