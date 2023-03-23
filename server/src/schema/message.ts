import { gql } from "apollo-server-express";

/**
  !는 꼭 들어가야 할때
  Query는 get
  Mution은 get 제외 나머지

  api요청이 이런형태가 온다는 뜻임
 */
const messageSchema = gql`
  type Message {
    id: ID!
    text: String!
    userId: ID!
    user: User!
    timestamp: Float #13자리 숫자
  }

  extend type Query {
    messages(cursor: ID): [Message!]! # getMessages
    message(id: ID!): Message! # getMessage
  }

  extend type Mutation {
    createMessage(text: String!, userId: ID!): Message!
    updateMessage(id: ID!, text: String!, userId: ID!): Message!
    deleteMessage(id: ID!, userId: ID!): ID!
  }
`;

export default messageSchema;
