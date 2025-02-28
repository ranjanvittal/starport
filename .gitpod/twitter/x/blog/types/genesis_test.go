package types_test

import (
	"testing"

	"github.com/cosmonaut/blog/x/blog/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				CommentList: []types.Comment{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				CommentCount: 2,
				FollowList: []types.Follow{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				FollowCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated comment",
			genState: &types.GenesisState{
				CommentList: []types.Comment{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid comment count",
			genState: &types.GenesisState{
				CommentList: []types.Comment{
					{
						Id: 1,
					},
				},
				CommentCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated follow",
			genState: &types.GenesisState{
				FollowList: []types.Follow{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid follow count",
			genState: &types.GenesisState{
				FollowList: []types.Follow{
					{
						Id: 1,
					},
				},
				FollowCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
