import { readDB, writeDB } from "../dbController.js";
import { v4 } from "uuid";

const getMsgs = () => readDB("messages"); // get data from db
const setMsgs = (data) => writeDB("messages", data); // write data in db

const messagesRoute = [
  {
    // GET MESSAGES
    method: "get",
    route: "/messages",
    handler: ({ query: { cursor = "" } }, res) => {
      const msgs = getMsgs();
      const fromIndex = msgs.findIndex((msg) => msg.id === cursor) + 1;
      res.send(msgs.slice(fromIndex, fromIndex + 15));
    },
  },
  {
    method: "get",
    route: "/messages/:id",
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const msg = msgs.find((msg) => msg.id === id);
        if (!msg) throw Error("not found");
        res.send(msg);
      } catch (err) {
        res.status(404).send({ error: err });
      }
    },
  },
  {
    method: "post",
    route: "/messages",
    handler: ({ body }, res) => {
      try {
        if (!body.userId) throw Error("no userId");
        const msgs = getMsgs(); // get msgs
        const newMsg = {
          // create new msg
          id: v4(),
          text: body.text,
          userId: body.userId,
          timeStamp: Date.now(),
        };
        msgs.unshift(newMsg); // push new msg
        setMsgs(msgs);
        res.send(newMsg);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    method: "put",
    route: "/messages/:id",
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id); // find index
        if (targetIndex < 0) throw "메세지가 없습니다"; // not found
        if (msgs[targetIndex].userId != body.userId) throw "사용자가 다릅니다"; // not user
        const newMsg = { ...msgs[targetIndex], text: body.text }; // change text
        msgs.splice(targetIndex, 1, newMsg); // update msgs
        setMsgs(msgs);
        res.send(newMsg);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    method: "delete",
    route: "/messages/:id",
    handler: ({ params: { id }, query: { userId } }, res) => {
      console.log(id, userId);
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id); // find index
        if (targetIndex < 0) throw "메세지가 없습니다"; // not found
        if (msgs[targetIndex].userId != userId) throw "사용자가 다릅니다"; // not user

        msgs.splice(targetIndex, 1); // update msgs
        setMsgs(msgs);
        res.send(id);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
];

export default messagesRoute;
