import { useEffect, useRef, useState } from "react";
import MsgInput from "./MsgInput";
import MsgItem from "./MsgItem";
import fetcher from "../fetcher";
import { useRouter } from "next/router";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { msgType } from "../type";

export default function MsgList({ serverMsgs }) {
  const {
    query: { userId = "" },
  } = useRouter();
  const [msgs, setMsgs] = useState(serverMsgs);
  const [editingId, setEditingId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const fetchMoreElement = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreElement);

  const startEdit = (id: string) => setEditingId(id);
  const endEdit = () => setEditingId(null);

  const handleCreate = async (text: string) => {
    const newMsg = await fetcher("post", "/messages", { text, userId });
    if (!newMsg) throw Error("something wrong");
    setMsgs([newMsg, ...msgs]);
  };

  const handleUpdate = async (text: string, id: string) => {
    const newMsg = await fetcher("put", `/messages/${id}`, {
      text,
      userId,
    });
    if (!newMsg) throw Error("something wrong");
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return msgs; // not found
      const newMsgs = [...msgs]; // found
      newMsgs.splice(
        targetIndex,
        1,
        newMsg
        // change text
      );
      return newMsgs;
    });
    endEdit();
  };

  const handleDelete = async (id: string) => {
    const receivedId = await fetcher("delete", `/messages/${id}`, {
      params: { userId },
    });
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === receivedId + "");
      if (targetIndex < 0) return msgs; // not found
      const newMsgs = [...msgs]; // found
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const getMessages = async () => {
    const getMsgs = await fetcher("get", "/messages", {
      params: { cursor: msgs[msgs.length - 1]?.id || "" },
    });
    if (getMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    setMsgs((msgs) => [...msgs, ...getMsgs]);
  };
  useEffect(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);

  return (
    <>
      {userId && <MsgInput onMutate={handleCreate} />}
      <ul className="messages">
        {msgs.map((data) => (
          <MsgItem
            key={data.id}
            {...data}
            startEdit={() => startEdit(data.id)}
            isEditing={editingId === data.id}
            myId={userId}
            onUpdate={handleUpdate}
            onDelete={() => handleDelete(data.id)}
          />
        ))}
      </ul>
      <div ref={fetchMoreElement}></div>
    </>
  );
}
