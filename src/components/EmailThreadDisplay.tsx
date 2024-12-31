import { useState } from "react";
import type { EmailThread } from "../types/EmailThread";
import SingleEmailThread from "./SingleEmailThread";

type EmailThreadDisplayProps = {
  emailThreads: EmailThread[];
  onSelectReply: (n: number) => void;
};

export default function EmailThreadDisplay({
  emailThreads,
  onSelectReply,
}: EmailThreadDisplayProps) {
  return (
    <ul className="">
      {emailThreads.map((t) => (
        <li key={t.id}>
          <SingleEmailThread onClickReply={() => onSelectReply(t.id)} {...t} />
        </li>
      ))}
    </ul>
  );
}
