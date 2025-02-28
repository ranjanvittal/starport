/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../blog/params";
import { Comment } from "../blog/comment";
import { Follow } from "../blog/follow";

export const protobufPackage = "cosmonaut.blog.blog";

/** GenesisState defines the blog module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  commentList: Comment[];
  commentCount: number;
  followList: Follow[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  followCount: number;
}

const baseGenesisState: object = { commentCount: 0, followCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commentList) {
      Comment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.commentCount !== 0) {
      writer.uint32(24).uint64(message.commentCount);
    }
    for (const v of message.followList) {
      Follow.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.followCount !== 0) {
      writer.uint32(40).uint64(message.followCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.commentList = [];
    message.followList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.commentList.push(Comment.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commentCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.followList.push(Follow.decode(reader, reader.uint32()));
          break;
        case 5:
          message.followCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.commentList = [];
    message.followList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.commentList !== undefined && object.commentList !== null) {
      for (const e of object.commentList) {
        message.commentList.push(Comment.fromJSON(e));
      }
    }
    if (object.commentCount !== undefined && object.commentCount !== null) {
      message.commentCount = Number(object.commentCount);
    } else {
      message.commentCount = 0;
    }
    if (object.followList !== undefined && object.followList !== null) {
      for (const e of object.followList) {
        message.followList.push(Follow.fromJSON(e));
      }
    }
    if (object.followCount !== undefined && object.followCount !== null) {
      message.followCount = Number(object.followCount);
    } else {
      message.followCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.commentList) {
      obj.commentList = message.commentList.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.commentList = [];
    }
    message.commentCount !== undefined &&
      (obj.commentCount = message.commentCount);
    if (message.followList) {
      obj.followList = message.followList.map((e) =>
        e ? Follow.toJSON(e) : undefined
      );
    } else {
      obj.followList = [];
    }
    message.followCount !== undefined &&
      (obj.followCount = message.followCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.commentList = [];
    message.followList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.commentList !== undefined && object.commentList !== null) {
      for (const e of object.commentList) {
        message.commentList.push(Comment.fromPartial(e));
      }
    }
    if (object.commentCount !== undefined && object.commentCount !== null) {
      message.commentCount = object.commentCount;
    } else {
      message.commentCount = 0;
    }
    if (object.followList !== undefined && object.followList !== null) {
      for (const e of object.followList) {
        message.followList.push(Follow.fromPartial(e));
      }
    }
    if (object.followCount !== undefined && object.followCount !== null) {
      message.followCount = object.followCount;
    } else {
      message.followCount = 0;
    }
    return message;
  },
};

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
