/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../blog/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Post } from "../blog/post";
import { Comment } from "../blog/comment";
import { Follow } from "../blog/follow";

export const protobufPackage = "cosmonaut.blog.blog";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryPostsRequest {
  /** Adding pagination to request */
  pagination: PageRequest | undefined;
}

export interface QueryPostsResponse {
  /** Returning a list of posts */
  Post: Post[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetCommentRequest {
  id: number;
}

export interface QueryGetCommentResponse {
  Comment: Comment | undefined;
}

export interface QueryAllCommentRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommentResponse {
  Comment: Comment[];
  pagination: PageResponse | undefined;
}

export interface QueryCommentsRequest {
  id: number;
  /** Adding pagination to request */
  pagination: PageRequest | undefined;
}

export interface QueryCommentsResponse {
  Post: Post | undefined;
  /** Returning a list of comments */
  Comment: Comment[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetFollowRequest {
  id: number;
}

export interface QueryGetFollowResponse {
  Follow: Follow | undefined;
}

export interface QueryAllFollowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFollowResponse {
  Follow: Follow[];
  pagination: PageResponse | undefined;
}

export interface QueryFollowingPostsRequest {
  id: number;
  creator: string;
}

export interface PostWithComments {
  post: Post | undefined;
  comments: Comment[];
}

export interface QueryFollowingPostsResponse {
  post_with_comments: PostWithComments[];
}

export interface QueryFollowedByRequest {
  creator: string;
  pagination: PageRequest | undefined;
}

export interface QueryFollowedByResponse {
  following: string[];
  pagination: PageResponse | undefined;
}

export interface QueryFollowedPostsRequest {
  creator: string;
  pagination: PageRequest | undefined;
}

export interface QueryFollowedPostsResponse {
  post: Post[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryPostsRequest: object = {};

export const QueryPostsRequest = {
  encode(message: QueryPostsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPostsRequest {
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPostsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPostsRequest>): QueryPostsRequest {
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryPostsResponse: object = {};

export const QueryPostsResponse = {
  encode(
    message: QueryPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse;
    message.Post = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPostsResponse {
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPostsResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPostsResponse>): QueryPostsResponse {
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCommentRequest: object = { id: 0 };

export const QueryGetCommentRequest = {
  encode(
    message: QueryGetCommentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCommentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentRequest {
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCommentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentRequest>
  ): QueryGetCommentRequest {
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCommentResponse: object = {};

export const QueryGetCommentResponse = {
  encode(
    message: QueryGetCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment = Comment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentResponse {
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromJSON(object.Comment);
    } else {
      message.Comment = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommentResponse): unknown {
    const obj: any = {};
    message.Comment !== undefined &&
      (obj.Comment = message.Comment
        ? Comment.toJSON(message.Comment)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentResponse>
  ): QueryGetCommentResponse {
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromPartial(object.Comment);
    } else {
      message.Comment = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentRequest: object = {};

export const QueryAllCommentRequest = {
  encode(
    message: QueryAllCommentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCommentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentRequest {
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentRequest>
  ): QueryAllCommentRequest {
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentResponse: object = {};

export const QueryAllCommentResponse = {
  encode(
    message: QueryAllCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment.push(Comment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentResponse {
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentResponse): unknown {
    const obj: any = {};
    if (message.Comment) {
      obj.Comment = message.Comment.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.Comment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentResponse>
  ): QueryAllCommentResponse {
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCommentsRequest: object = { id: 0 };

export const QueryCommentsRequest = {
  encode(
    message: QueryCommentsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCommentsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommentsRequest } as QueryCommentsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommentsRequest {
    const message = { ...baseQueryCommentsRequest } as QueryCommentsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCommentsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCommentsRequest>): QueryCommentsRequest {
    const message = { ...baseQueryCommentsRequest } as QueryCommentsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCommentsResponse: object = {};

export const QueryCommentsResponse = {
  encode(
    message: QueryCommentsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Post !== undefined) {
      Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCommentsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommentsResponse } as QueryCommentsResponse;
    message.Comment = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post = Post.decode(reader, reader.uint32());
          break;
        case 2:
          message.Comment.push(Comment.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommentsResponse {
    const message = { ...baseQueryCommentsResponse } as QueryCommentsResponse;
    message.Comment = [];
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromJSON(object.Post);
    } else {
      message.Post = undefined;
    }
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCommentsResponse): unknown {
    const obj: any = {};
    message.Post !== undefined &&
      (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
    if (message.Comment) {
      obj.Comment = message.Comment.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.Comment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommentsResponse>
  ): QueryCommentsResponse {
    const message = { ...baseQueryCommentsResponse } as QueryCommentsResponse;
    message.Comment = [];
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromPartial(object.Post);
    } else {
      message.Post = undefined;
    }
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetFollowRequest: object = { id: 0 };

export const QueryGetFollowRequest = {
  encode(
    message: QueryGetFollowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFollowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetFollowRequest } as QueryGetFollowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFollowRequest {
    const message = { ...baseQueryGetFollowRequest } as QueryGetFollowRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetFollowRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFollowRequest>
  ): QueryGetFollowRequest {
    const message = { ...baseQueryGetFollowRequest } as QueryGetFollowRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetFollowResponse: object = {};

export const QueryGetFollowResponse = {
  encode(
    message: QueryGetFollowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Follow !== undefined) {
      Follow.encode(message.Follow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFollowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetFollowResponse } as QueryGetFollowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Follow = Follow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFollowResponse {
    const message = { ...baseQueryGetFollowResponse } as QueryGetFollowResponse;
    if (object.Follow !== undefined && object.Follow !== null) {
      message.Follow = Follow.fromJSON(object.Follow);
    } else {
      message.Follow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFollowResponse): unknown {
    const obj: any = {};
    message.Follow !== undefined &&
      (obj.Follow = message.Follow ? Follow.toJSON(message.Follow) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFollowResponse>
  ): QueryGetFollowResponse {
    const message = { ...baseQueryGetFollowResponse } as QueryGetFollowResponse;
    if (object.Follow !== undefined && object.Follow !== null) {
      message.Follow = Follow.fromPartial(object.Follow);
    } else {
      message.Follow = undefined;
    }
    return message;
  },
};

const baseQueryAllFollowRequest: object = {};

export const QueryAllFollowRequest = {
  encode(
    message: QueryAllFollowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFollowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllFollowRequest } as QueryAllFollowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFollowRequest {
    const message = { ...baseQueryAllFollowRequest } as QueryAllFollowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFollowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFollowRequest>
  ): QueryAllFollowRequest {
    const message = { ...baseQueryAllFollowRequest } as QueryAllFollowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFollowResponse: object = {};

export const QueryAllFollowResponse = {
  encode(
    message: QueryAllFollowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Follow) {
      Follow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFollowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllFollowResponse } as QueryAllFollowResponse;
    message.Follow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Follow.push(Follow.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFollowResponse {
    const message = { ...baseQueryAllFollowResponse } as QueryAllFollowResponse;
    message.Follow = [];
    if (object.Follow !== undefined && object.Follow !== null) {
      for (const e of object.Follow) {
        message.Follow.push(Follow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFollowResponse): unknown {
    const obj: any = {};
    if (message.Follow) {
      obj.Follow = message.Follow.map((e) =>
        e ? Follow.toJSON(e) : undefined
      );
    } else {
      obj.Follow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFollowResponse>
  ): QueryAllFollowResponse {
    const message = { ...baseQueryAllFollowResponse } as QueryAllFollowResponse;
    message.Follow = [];
    if (object.Follow !== undefined && object.Follow !== null) {
      for (const e of object.Follow) {
        message.Follow.push(Follow.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFollowingPostsRequest: object = { id: 0, creator: "" };

export const QueryFollowingPostsRequest = {
  encode(
    message: QueryFollowingPostsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFollowingPostsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFollowingPostsRequest,
    } as QueryFollowingPostsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowingPostsRequest {
    const message = {
      ...baseQueryFollowingPostsRequest,
    } as QueryFollowingPostsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryFollowingPostsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFollowingPostsRequest>
  ): QueryFollowingPostsRequest {
    const message = {
      ...baseQueryFollowingPostsRequest,
    } as QueryFollowingPostsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const basePostWithComments: object = {};

export const PostWithComments = {
  encode(message: PostWithComments, writer: Writer = Writer.create()): Writer {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.comments) {
      Comment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PostWithComments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostWithComments } as PostWithComments;
    message.comments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;
        case 2:
          message.comments.push(Comment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostWithComments {
    const message = { ...basePostWithComments } as PostWithComments;
    message.comments = [];
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromJSON(object.post);
    } else {
      message.post = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      for (const e of object.comments) {
        message.comments.push(Comment.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: PostWithComments): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    if (message.comments) {
      obj.comments = message.comments.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.comments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PostWithComments>): PostWithComments {
    const message = { ...basePostWithComments } as PostWithComments;
    message.comments = [];
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromPartial(object.post);
    } else {
      message.post = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      for (const e of object.comments) {
        message.comments.push(Comment.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryFollowingPostsResponse: object = {};

export const QueryFollowingPostsResponse = {
  encode(
    message: QueryFollowingPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.post_with_comments) {
      PostWithComments.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFollowingPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFollowingPostsResponse,
    } as QueryFollowingPostsResponse;
    message.post_with_comments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post_with_comments.push(
            PostWithComments.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowingPostsResponse {
    const message = {
      ...baseQueryFollowingPostsResponse,
    } as QueryFollowingPostsResponse;
    message.post_with_comments = [];
    if (
      object.post_with_comments !== undefined &&
      object.post_with_comments !== null
    ) {
      for (const e of object.post_with_comments) {
        message.post_with_comments.push(PostWithComments.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryFollowingPostsResponse): unknown {
    const obj: any = {};
    if (message.post_with_comments) {
      obj.post_with_comments = message.post_with_comments.map((e) =>
        e ? PostWithComments.toJSON(e) : undefined
      );
    } else {
      obj.post_with_comments = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFollowingPostsResponse>
  ): QueryFollowingPostsResponse {
    const message = {
      ...baseQueryFollowingPostsResponse,
    } as QueryFollowingPostsResponse;
    message.post_with_comments = [];
    if (
      object.post_with_comments !== undefined &&
      object.post_with_comments !== null
    ) {
      for (const e of object.post_with_comments) {
        message.post_with_comments.push(PostWithComments.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryFollowedByRequest: object = { creator: "" };

export const QueryFollowedByRequest = {
  encode(
    message: QueryFollowedByRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryFollowedByRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFollowedByRequest } as QueryFollowedByRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowedByRequest {
    const message = { ...baseQueryFollowedByRequest } as QueryFollowedByRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFollowedByRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFollowedByRequest>
  ): QueryFollowedByRequest {
    const message = { ...baseQueryFollowedByRequest } as QueryFollowedByRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFollowedByResponse: object = { following: "" };

export const QueryFollowedByResponse = {
  encode(
    message: QueryFollowedByResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.following) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryFollowedByResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFollowedByResponse,
    } as QueryFollowedByResponse;
    message.following = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.following.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowedByResponse {
    const message = {
      ...baseQueryFollowedByResponse,
    } as QueryFollowedByResponse;
    message.following = [];
    if (object.following !== undefined && object.following !== null) {
      for (const e of object.following) {
        message.following.push(String(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFollowedByResponse): unknown {
    const obj: any = {};
    if (message.following) {
      obj.following = message.following.map((e) => e);
    } else {
      obj.following = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFollowedByResponse>
  ): QueryFollowedByResponse {
    const message = {
      ...baseQueryFollowedByResponse,
    } as QueryFollowedByResponse;
    message.following = [];
    if (object.following !== undefined && object.following !== null) {
      for (const e of object.following) {
        message.following.push(e);
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFollowedPostsRequest: object = { creator: "" };

export const QueryFollowedPostsRequest = {
  encode(
    message: QueryFollowedPostsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFollowedPostsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFollowedPostsRequest,
    } as QueryFollowedPostsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowedPostsRequest {
    const message = {
      ...baseQueryFollowedPostsRequest,
    } as QueryFollowedPostsRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFollowedPostsRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFollowedPostsRequest>
  ): QueryFollowedPostsRequest {
    const message = {
      ...baseQueryFollowedPostsRequest,
    } as QueryFollowedPostsRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFollowedPostsResponse: object = {};

export const QueryFollowedPostsResponse = {
  encode(
    message: QueryFollowedPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFollowedPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFollowedPostsResponse,
    } as QueryFollowedPostsResponse;
    message.post = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowedPostsResponse {
    const message = {
      ...baseQueryFollowedPostsResponse,
    } as QueryFollowedPostsResponse;
    message.post = [];
    if (object.post !== undefined && object.post !== null) {
      for (const e of object.post) {
        message.post.push(Post.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFollowedPostsResponse): unknown {
    const obj: any = {};
    if (message.post) {
      obj.post = message.post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFollowedPostsResponse>
  ): QueryFollowedPostsResponse {
    const message = {
      ...baseQueryFollowedPostsResponse,
    } as QueryFollowedPostsResponse;
    message.post = [];
    if (object.post !== undefined && object.post !== null) {
      for (const e of object.post) {
        message.post.push(Post.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Posts items. */
  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse>;
  /** Queries a Comment by id. */
  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse>;
  /** Queries a list of Comment items. */
  CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
  /** Queries a list of Comments items. */
  Comments(request: QueryCommentsRequest): Promise<QueryCommentsResponse>;
  /** Queries a Follow by id. */
  Follow(request: QueryGetFollowRequest): Promise<QueryGetFollowResponse>;
  /** Queries a list of Follow items. */
  FollowAll(request: QueryAllFollowRequest): Promise<QueryAllFollowResponse>;
  /** Queries a list of FollowingPosts items. */
  FollowingPosts(
    request: QueryFollowingPostsRequest
  ): Promise<QueryFollowingPostsResponse>;
  /** Queries a list of FollowedBy items. */
  FollowedBy(request: QueryFollowedByRequest): Promise<QueryFollowedByResponse>;
  /** Queries a list of FollowedPosts items. */
  FollowedPosts(
    request: QueryFollowedPostsRequest
  ): Promise<QueryFollowedPostsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
    const data = QueryPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "Posts",
      data
    );
    return promise.then((data) => QueryPostsResponse.decode(new Reader(data)));
  }

  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse> {
    const data = QueryGetCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "Comment",
      data
    );
    return promise.then((data) =>
      QueryGetCommentResponse.decode(new Reader(data))
    );
  }

  CommentAll(
    request: QueryAllCommentRequest
  ): Promise<QueryAllCommentResponse> {
    const data = QueryAllCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "CommentAll",
      data
    );
    return promise.then((data) =>
      QueryAllCommentResponse.decode(new Reader(data))
    );
  }

  Comments(request: QueryCommentsRequest): Promise<QueryCommentsResponse> {
    const data = QueryCommentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "Comments",
      data
    );
    return promise.then((data) =>
      QueryCommentsResponse.decode(new Reader(data))
    );
  }

  Follow(request: QueryGetFollowRequest): Promise<QueryGetFollowResponse> {
    const data = QueryGetFollowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "Follow",
      data
    );
    return promise.then((data) =>
      QueryGetFollowResponse.decode(new Reader(data))
    );
  }

  FollowAll(request: QueryAllFollowRequest): Promise<QueryAllFollowResponse> {
    const data = QueryAllFollowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "FollowAll",
      data
    );
    return promise.then((data) =>
      QueryAllFollowResponse.decode(new Reader(data))
    );
  }

  FollowingPosts(
    request: QueryFollowingPostsRequest
  ): Promise<QueryFollowingPostsResponse> {
    const data = QueryFollowingPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "FollowingPosts",
      data
    );
    return promise.then((data) =>
      QueryFollowingPostsResponse.decode(new Reader(data))
    );
  }

  FollowedBy(
    request: QueryFollowedByRequest
  ): Promise<QueryFollowedByResponse> {
    const data = QueryFollowedByRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "FollowedBy",
      data
    );
    return promise.then((data) =>
      QueryFollowedByResponse.decode(new Reader(data))
    );
  }

  FollowedPosts(
    request: QueryFollowedPostsRequest
  ): Promise<QueryFollowedPostsResponse> {
    const data = QueryFollowedPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.blog.blog.Query",
      "FollowedPosts",
      data
    );
    return promise.then((data) =>
      QueryFollowedPostsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
