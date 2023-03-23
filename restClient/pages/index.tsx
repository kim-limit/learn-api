import MsgList from "../components/MsgList";
import fetcher from "../fetcher";
import { msgType } from "../types";

export default function Home(serverMsgs: msgType[]) {
  return (
    <>
      <MsgList serverMsgs={serverMsgs} />
    </>
  );
}

export const getServerSideProps = async () => {
  const serverMsgs: msgType[] = await fetcher("get", "/messages");
  return {
    props: {
      serverMsgs,
    },
  };
};
