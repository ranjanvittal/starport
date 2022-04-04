package keeper

import (
	"encoding/binary"

	"github.com/cosmonaut/blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetFollowCount get the total number of follow
func (k Keeper) GetFollowCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FollowCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetFollowCount set the total number of follow
func (k Keeper) SetFollowCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FollowCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendFollow appends a follow in the store with a new id and update the count
func (k Keeper) AppendFollow(
	ctx sdk.Context,
	follow types.Follow,
) uint64 {
	// Create the follow
	count := k.GetFollowCount(ctx)

	// Set the ID of the appended value
	follow.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FollowKey))
	appendedValue := k.cdc.MustMarshal(&follow)
	store.Set(GetFollowIDBytes(follow.Id), appendedValue)

	// Update follow count
	k.SetFollowCount(ctx, count+1)

	return count
}

// SetFollow set a specific follow in the store
func (k Keeper) SetFollow(ctx sdk.Context, follow types.Follow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FollowKey))
	b := k.cdc.MustMarshal(&follow)
	store.Set(GetFollowIDBytes(follow.Id), b)
}

// GetFollow returns a follow from its id
func (k Keeper) GetFollow(ctx sdk.Context, id uint64) (val types.Follow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FollowKey))
	b := store.Get(GetFollowIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFollow removes a follow from the store
func (k Keeper) RemoveFollow(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FollowKey))
	store.Delete(GetFollowIDBytes(id))
}

// GetAllFollow returns all follow
func (k Keeper) GetAllFollow(ctx sdk.Context) (list []types.Follow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FollowKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Follow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFollowIDBytes returns the byte representation of the ID
func GetFollowIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFollowIDFromBytes returns ID in uint64 format from a byte array
func GetFollowIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
