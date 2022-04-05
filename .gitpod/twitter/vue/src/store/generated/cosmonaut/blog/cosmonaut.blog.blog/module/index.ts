// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDummy } from "./types/blog/tx";
import { MsgCreateFollow } from "./types/blog/tx";
import { MsgDeleteComment } from "./types/blog/tx";
import { MsgCreateComment } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";


const types = [
  ["/cosmonaut.blog.blog.MsgCreateDummy", MsgCreateDummy],
  ["/cosmonaut.blog.blog.MsgCreateFollow", MsgCreateFollow],
  ["/cosmonaut.blog.blog.MsgDeleteComment", MsgDeleteComment],
  ["/cosmonaut.blog.blog.MsgCreateComment", MsgCreateComment],
  ["/cosmonaut.blog.blog.MsgCreatePost", MsgCreatePost],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateDummy: (data: MsgCreateDummy): EncodeObject => ({ typeUrl: "/cosmonaut.blog.blog.MsgCreateDummy", value: MsgCreateDummy.fromPartial( data ) }),
    msgCreateFollow: (data: MsgCreateFollow): EncodeObject => ({ typeUrl: "/cosmonaut.blog.blog.MsgCreateFollow", value: MsgCreateFollow.fromPartial( data ) }),
    msgDeleteComment: (data: MsgDeleteComment): EncodeObject => ({ typeUrl: "/cosmonaut.blog.blog.MsgDeleteComment", value: MsgDeleteComment.fromPartial( data ) }),
    msgCreateComment: (data: MsgCreateComment): EncodeObject => ({ typeUrl: "/cosmonaut.blog.blog.MsgCreateComment", value: MsgCreateComment.fromPartial( data ) }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/cosmonaut.blog.blog.MsgCreatePost", value: MsgCreatePost.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
