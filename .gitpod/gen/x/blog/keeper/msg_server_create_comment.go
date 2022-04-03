package keeper

import (
	"context"

	"github.com/cosmonaut/blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateComment(goCtx context.Context, msg *types.MsgCreateComment) (*types.MsgCreateCommentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	post := k.GetPost(ctx, msg.PostID)
	postId := post.Id

	// Create variable of type comment
	var comment = types.Comment{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Body:      msg.Body,
		Title:     msg.Title,
		PostID:    msg.PostID,
		CreatedAt: ctx.BlockHeight(),
	}

	// Check if the Post Exists for which a comment is being created
	if msg.PostID != postId {
		return nil, sdkerrors.Wrapf(types.ErrID, "Post Blog Id does not exist for which comment with Blog Id %d was made", msg.PostID)
	}

	// Check if the comment is older than the Post. If more than 100 blocks, then return error.
	if comment.CreatedAt > post.CreatedAt+100 {
		return nil, sdkerrors.Wrapf(types.ErrCommentOld, "Comment created at %d is older than post created at %d", comment.CreatedAt, post.CreatedAt)
	}

	id := k.AppendComment(ctx, comment)
	return &types.MsgCreateCommentResponse{Id: id}, nil
}
