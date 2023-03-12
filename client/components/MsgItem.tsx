import MsgInput from "./MsgInput";

type MsgItemProps = {
  id: string;
  userId: string;
  timeStamp: number;
  text: string;
  isEditing: boolean;
  myId: string;
  startEdit: () => void;
  onUpdate: (text: string, id: string) => void;
  onDelete: () => void;
};

export default function MsgItem({
  id,
  userId,
  timeStamp,
  text,
  isEditing,
  myId,
  startEdit,
  onUpdate,
  onDelete,
}: MsgItemProps) {
  return (
    <li className="messages__item">
      <h3>
        {userId}{" "}
        <sub>
          {new Date(timeStamp).toLocaleString("ko-KR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </sub>
      </h3>
      <div>{id}</div>
      {isEditing ? (
        <>
          <MsgInput onMutate={onUpdate} id={id} text={text} />
        </>
      ) : (
        text
      )}
      {userId === myId && (
        <div className="messages__buttons">
          <button onClick={startEdit}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </div>
      )}
    </li>
  );
}
