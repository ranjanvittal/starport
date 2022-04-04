package keeper

import (
	"context"
	"log"

	"github.com/cosmonaut/blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FollowingPosts(goCtx context.Context, req *types.QueryFollowingPostsRequest) (*types.QueryFollowingPostsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	follow_list := k.GetAllFollow(ctx)
	post_list := k.GetAllPost(ctx)
	comment_list := k.GetAllComment(ctx)

	log.Println("here1")
	var followed_creators map[string]bool
	for i := 0; i < len(follow_list); i++ {
		follow := follow_list[i]
		if follow.Creator == req.Creator {
			followed_creators[follow.Following] = true
		}
	}
	log.Println("gotten here1")
	var followed_post_with_comments map[uint64]types.PostWithComments
	var followed_post_ids map[uint64]bool
	for i := 0; i < len(post_list); i++ {
		post := post_list[i]
		if followed_creators[post.Creator] == true {
			var post_with_comments types.PostWithComments
			post_with_comments.Post = &post
			followed_post_with_comments[post.Id] = post_with_comments
		}
	}
	log.Println("gotten here2")
	for i := 0; i < len(comment_list); i++ {
		comment := comment_list[i]
		if followed_post_ids[comment.PostID] == true {
			if entry, ok := followed_post_with_comments[comment.PostID]; ok {
				entry.Comments = append(entry.Comments, &comment)
				followed_post_with_comments[comment.PostID] = entry
			}
		}
	}
	var followed_posts_with_comments_list []*types.PostWithComments
	log.Println("gotten here3")
	for _, element := range followed_post_with_comments {
		followed_posts_with_comments_list = append(followed_posts_with_comments_list, &element)
	}
	log.Println("gotten here4")
	return &types.QueryFollowingPostsResponse{
		PostWithComments: followed_posts_with_comments_list,
	}, nil
}
