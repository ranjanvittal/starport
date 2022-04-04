package keeper_test

import (
	"testing"

	keepertest "github.com/cosmonaut/blog/testutil/keeper"
	"github.com/cosmonaut/blog/testutil/nullify"
	"github.com/cosmonaut/blog/x/blog/keeper"
	"github.com/cosmonaut/blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNFollow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Follow {
	items := make([]types.Follow, n)
	for i := range items {
		items[i].Id = keeper.AppendFollow(ctx, items[i])
	}
	return items
}

func TestFollowGet(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNFollow(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetFollow(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestFollowRemove(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNFollow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFollow(ctx, item.Id)
		_, found := keeper.GetFollow(ctx, item.Id)
		require.False(t, found)
	}
}

func TestFollowGetAll(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNFollow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFollow(ctx)),
	)
}

func TestFollowCount(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNFollow(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetFollowCount(ctx))
}
