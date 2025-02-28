package simulation

import (
	"math/rand"

	"github.com/cosmonaut/blog/x/blog/keeper"
	"github.com/cosmonaut/blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgCreateFollow(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateFollow{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateFollow simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateFollow simulation not implemented"), nil, nil
	}
}
