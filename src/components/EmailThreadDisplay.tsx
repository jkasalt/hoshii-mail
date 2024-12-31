import { useState } from "react";
import type { EmailThread } from "../types/EmailThread";
import SingleEmailThread from "./SingleEmailThread";

type EmailThreadDisplayProps = {
  emailThreads: EmailThread[];
};

export default function EmailThreadDisplay({
  emailThreads,
}: EmailThreadDisplayProps) {
  return (
    <ul className="">
      {emailThreads.map((t) => (
        <li key={t.id}>
          <SingleEmailThread {...t} />
        </li>
      ))}
    </ul>
  );
}
