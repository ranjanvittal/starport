package blog

import (
	"github.com/cosmonaut/blog/x/blog/keeper"
	"github.com/cosmonaut/blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the comment
	for _, elem := range genState.CommentList {
		k.SetComment(ctx, elem)
	}

	// Set comment count
	k.SetCommentCount(ctx, genState.CommentCount)
	// Set all the follow
	for _, elem := range genState.FollowList {
		k.SetFollow(ctx, elem)
	}

	// Set follow count
	k.SetFollowCount(ctx, genState.FollowCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CommentList = k.GetAllComment(ctx)
	genesis.CommentCount = k.GetCommentCount(ctx)
	genesis.FollowList = k.GetAllFollow(ctx)
	genesis.FollowCount = k.GetFollowCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
