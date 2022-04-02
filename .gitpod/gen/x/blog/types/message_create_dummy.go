package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateDummy = "create_dummy"

var _ sdk.Msg = &MsgCreateDummy{}

func NewMsgCreateDummy(creator string, dummy string, t1 string, t2 string) *MsgCreateDummy {
	return &MsgCreateDummy{
		Creator: creator,
		Dummy:   dummy,
		T1:      t1,
		T2:      t2,
	}
}

func (msg *MsgCreateDummy) Route() string {
	return RouterKey
}

func (msg *MsgCreateDummy) Type() string {
	return TypeMsgCreateDummy
}

func (msg *MsgCreateDummy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDummy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDummy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
