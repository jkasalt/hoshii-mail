import type { EmailThread } from "../types/EmailThread";

type EmailThreadDisplayProps = {
  emailThreads: EmailThread[];
};

export default function EmailThreadDisplay({
  emailThreads,
}: EmailThreadDisplayProps) {
  return (
    <>
      <p>Hello from component</p>
      <ul>
        {emailThreads.map((t) => (
          <li key={t.emails[0].timestamp}>
            {t.sender} -- {t.subject}
          </li>
        ))}
      </ul>
    </>
  );
}
