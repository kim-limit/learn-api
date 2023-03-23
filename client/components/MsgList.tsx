import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useQueryClient, useMutation, useInfiniteQuery } from "react-query";
import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import {
  QueryKeys,
  fetcher,
  findTargetMsgIndex,
  getNewMessages,
} from "../queryClient";
import {
  GET_MESSAGES,
  CREATE_MESSAGE,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
} from "../graphql/message";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { Message, MsgQueryData, User } from "../types";

const MsgList = ({ smsgs }: { smsgs: Message[] }) => {
  const client = useQueryClient(); // cache를 위해 _app에서 설정한 queryClient가져옴
  const { query } = useRouter(); // queryString 수집
  const userId = (query.userId || query.userid || "") as string; // userId or id or ""
  const [msgs, setMsgs] = useState([{ messages: smsgs }]); // [{messages}, {messages}, ...]
  const [editingId, setEditingId] = useState<string | null>(null); // userId를 통해 수정 상태 관리
  const fetchMoreEl = useRef<HTMLDivElement>(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);

  const doneEdit = () => setEditingId(null); // userId를 통해 수정 상태 관리

  const { mutate: onCreate } = useMutation(
    ({ text }: { text: string }) => fetcher(CREATE_MESSAGE, { text, userId }),
    {
      onSuccess: ({ createMessage }) => {
        // CREATE_MESSAGE 내의 createMessage가 Return 값임
        // queryKey를 이용해 client가 들고있는 cache정보 업데이트
        client.setQueryData<MsgQueryData>(QueryKeys.MESSAGES, (old) => {
          if (!old)
            // 아무것도 없을때 데이터 추가하는경유
            return { pages: [{ messages: [createMessage] }], pageParams: "" };
          return {
            pages: [
              // page0: {messages:[create, old 15개]}, page1, 2...
              { messages: [createMessage, ...old.pages[0].messages] },
              ...old.pages.slice(1),
            ],
            pageParams: old.pageParams,
          };
        });
      },
    }
  );

  const { mutate: onUpdate } = useMutation(
    ({ text, id }: { text: string; id?: string }) =>
      fetcher(UPDATE_MESSAGE, { text, id, userId }),
    {
      onSuccess: ({ updateMessage }) => {
        // mutate 결과값 -> updateMessage
        client.setQueryData<MsgQueryData>(QueryKeys.MESSAGES, (old) => {
          if (!old) return { pages: [{ messages: [] }], pageParams: "" };
          const { pageIndex, msgIndex } = findTargetMsgIndex(
            old.pages,
            updateMessage.id
          );
          // 둘중에 하나라도 index값 없으면 그대로
          if (pageIndex < 0 || msgIndex < 0) return old;
          const newMsgs = getNewMessages(old); // old로 현재 메세지들 새로 만듬
          // 그 중에 하나를 updateMessage(수정된 결과)로 교체함
          newMsgs.pages[pageIndex].messages.splice(msgIndex, 1, updateMessage);
          return newMsgs;
        });
        doneEdit();
      },
    }
  );

  const { mutate: onDelete } = useMutation(
    (id: string) => fetcher(DELETE_MESSAGE, { id, userId }),
    {
      onSuccess: ({ deleteMessage: deletedId }) => {
        client.setQueryData<MsgQueryData>(QueryKeys.MESSAGES, (old) => {
          if (!old) return { pages: [{ messages: [] }], pageParams: "" };
          const { pageIndex, msgIndex } = findTargetMsgIndex(
            old.pages,
            deletedId
          );
          if (pageIndex < 0 || msgIndex < 0) return old;

          const newMsgs = getNewMessages(old);
          newMsgs.pages[pageIndex].messages.splice(msgIndex, 1);
          return newMsgs;
        });
      },
    }
  );

  const { data, error, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    QueryKeys.MESSAGES, // query key
    // fetcher는 requet를 바로 반환하기 떄문에 ()=>Fetcher
    // {queryKey, pageParam}
    ({ pageParam = "" }) => fetcher(GET_MESSAGES, { cursor: pageParam }),
    {
      getNextPageParam: ({ messages }) => {
        return messages?.[messages.length - 1]?.id;
      },
    }
  );

  useEffect(() => {
    if (!data?.pages) return;
    setMsgs(data.pages);
  }, [data?.pages]);

  if (isError) {
    console.error(error);
    return null;
  }

  //data : {messages : []} -> {pageParams:[], pages:[{ msg:[15] }, { msg:[15] }]}
  useEffect(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage]);

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="messages">
        {msgs.map(({ messages }, pageIndex) =>
          messages.map((x) => (
            <MsgItem
              key={pageIndex + x.id}
              {...x}
              onUpdate={onUpdate}
              onDelete={() => onDelete(x.id)}
              startEdit={() => setEditingId(x.id)}
              isEditing={editingId === x.id}
              myId={userId}
            />
          ))
        )}
      </ul>
      <div ref={fetchMoreEl} />
    </>
  );
};

export default MsgList;
