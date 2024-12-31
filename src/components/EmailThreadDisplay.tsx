import { useReducer, useState } from "react";
import type { EmailThread } from "../types/EmailThread";
import SingleEmailThread from "./SingleEmailThread";
import { threadsReducer } from "../reducers/EmailThreadReducer";

type EmailThreadDisplayProps = {
  emailThreads: EmailThread[];
};

export default function EmailThreadDisplay({
  emailThreads,
}: EmailThreadDisplayProps) {
  return (
    <ul className="">
      {emailThreads.map((t) => {
        const [thread, dispatch] = useReducer(threadsReducer, t);
        return (
          <li key={t.id}>
            <SingleEmailThread {...thread} dispatch={dispatch} />
          </li>
        );
      })}
    </ul>
  );
}
