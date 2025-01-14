package blog

import (
	"math/rand"

	"github.com/cosmonaut/blog/testutil/sample"
	blogsimulation "github.com/cosmonaut/blog/x/blog/simulation"
	"github.com/cosmonaut/blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = blogsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreatePost = "op_weight_msg_create_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePost int = 100

	opWeightMsgCreateDummy = "op_weight_msg_create_dummy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDummy int = 100

	opWeightMsgCreateComment = "op_weight_msg_create_comment"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateComment int = 100

	opWeightMsgDeleteComment = "op_weight_msg_delete_comment"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteComment int = 100

	opWeightMsgCreateFollow = "op_weight_msg_create_follow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateFollow int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	blogGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&blogGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreatePost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePost, &weightMsgCreatePost, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePost = defaultWeightMsgCreatePost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePost,
		blogsimulation.SimulateMsgCreatePost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDummy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDummy, &weightMsgCreateDummy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDummy = defaultWeightMsgCreateDummy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDummy,
		blogsimulation.SimulateMsgCreateDummy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateComment int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateComment, &weightMsgCreateComment, nil,
		func(_ *rand.Rand) {
			weightMsgCreateComment = defaultWeightMsgCreateComment
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateComment,
		blogsimulation.SimulateMsgCreateComment(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteComment int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteComment, &weightMsgDeleteComment, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteComment = defaultWeightMsgDeleteComment
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteComment,
		blogsimulation.SimulateMsgDeleteComment(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateFollow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateFollow, &weightMsgCreateFollow, nil,
		func(_ *rand.Rand) {
			weightMsgCreateFollow = defaultWeightMsgCreateFollow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateFollow,
		blogsimulation.SimulateMsgCreateFollow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
