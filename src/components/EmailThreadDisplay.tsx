import type { EmailThread } from "../types/EmailThread";
import SingleEmailThread from "./SingleEmailThread";

type EmailThreadDisplayProps = {
  emailThreads: EmailThread[];
};

export default function EmailThreadDisplay({
  emailThreads,
}: EmailThreadDisplayProps) {
  return (
    <ul>
      {emailThreads.map((t) => (
        <li key={t.emails[0].timestamp}>
          <SingleEmailThread {...t} />
        </li>
      ))}
    </ul>
  );
}
