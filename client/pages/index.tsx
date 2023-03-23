import MsgList from "../components/MsgList";
import { fetcher } from "../queryClient";
import { GET_MESSAGES } from "../graphql/message";
import { Message, User } from "../types";
import { GET_USERS } from "../graphql/user";

const Home = ({ smsgs, users }: { smsgs: Message[]; users: User[] }) => (
  <>
    <h1>CRUD EXAM</h1>
    <MsgList smsgs={smsgs} />
  </>
);

export const getServerSideProps = async () => {
  const { messages: smsgs }: { messages: Message[] } = await fetcher(
    GET_MESSAGES
  );

  console.log(smsgs);
  return {
    props: { smsgs },
  };
};

export default Home;
