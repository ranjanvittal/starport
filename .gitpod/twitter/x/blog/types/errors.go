package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/blog module sentinel errors
//...
var (
	ErrCommentOld = sdkerrors.Register(ModuleName, 1300, "")
	ErrID         = sdkerrors.Register(ModuleName, 1400, "")
)
