package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateFollow = "create_follow"

var _ sdk.Msg = &MsgCreateFollow{}

func NewMsgCreateFollow(creator string, following string) *MsgCreateFollow {
	return &MsgCreateFollow{
		Creator:   creator,
		Following: following,
	}
}

func (msg *MsgCreateFollow) Route() string {
	return RouterKey
}

func (msg *MsgCreateFollow) Type() string {
	return TypeMsgCreateFollow
}

func (msg *MsgCreateFollow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateFollow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateFollow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
