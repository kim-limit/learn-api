import { gql } from "apollo-server-express";
import messageSchema from "./message";
import userSchema from "./user";

/**
  schema를 묶기위해 linkSchema 설정(의미없는 정보로)
 */
const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, messageSchema, userSchema];
