import { request } from "graphql-request";
import { DocumentNode } from "graphql/language/ast";
import { Message, MsgQueryData } from "./types";

const URL = "http://localhost:8000/graphql";

export const fetcher = (
  query: DocumentNode, // query 문
  variables: { [key: string]: any } = {} // 전달 data
) => request(URL, query, variables);

export const QueryKeys = {
  // cache를 위한 쿼리키
  MESSAGES: "MESSAGES",
  MESSAGE: "MESSAGE",
  USERS: "USERS",
  USER: "USER",
};

export const findTargetMsgIndex = (
  pages: { messages: Message[] }[],
  id: string
) => {
  let msgIndex = -1;
  const pageIndex = pages.findIndex(({ messages }) => {
    // page -> messages: Message[] -> msg -> msg.id === id => msgIndex(id index)
    msgIndex = messages.findIndex((msg) => msg.id === id);
    if (msgIndex > -1) {
      return true;
    }
    return false;
  });
  return { pageIndex, msgIndex };
};

export const getNewMessages = (old: MsgQueryData) => ({
  pageParams: old.pageParams,
  pages: old.pages.map(({ messages }) => ({ messages: [...messages] })),
});
