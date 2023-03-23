import { useRef } from "react";

type MsgInputProps = {
  id?: string;
  text?: string;
  onMutate: (text: string, id?: string) => void;
};
export default function MsgInput({ id, text, onMutate }: MsgInputProps) {
  const textRef = useRef(null);

  const HandleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = "";
    id ? onMutate(text, id) : onMutate(text);
  };

  return (
    <form className="messages__input" onSubmit={HandleSubmit}>
      <textarea
        ref={textRef}
        defaultValue={text}
        placeholder="내용을 입력하세요."
      />
      <button type="submit">완료</button>
    </form>
  );
}
