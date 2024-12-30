import { useMemo, useState } from "react";
import type { EmailThread } from "../types/EmailThread";
import EmailDisplay from "./EmailDisplay";

export default function SingleEmailThread({
  sender,
  subject,
  emails,
}: EmailThread) {
  const [show, setShow] = useState(false);

  const sortedEmails = useMemo(() => {
    return [...emails].sort(
      (a, b) => Number(a.timestamp) - Number(b.timestamp),
    );
  }, [emails]);

  const maxPreviewLen = 70;

  const preview = () => {
    const body = emails[0]?.body ?? "";
    const truncated =
      body.length > maxPreviewLen ? `${body.slice(0, maxPreviewLen)}...` : body;
    return <p>{truncated}</p>;
  };

  return (
    <div>
      <div className="flex">
        <div>
          {sender} -- {subject}
        </div>
        <button type="button" className="ml-auto">
          Assign
        </button>
      </div>
      <button
        className="text-left"
        type="button"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <ul>
            {sortedEmails.map((m) => (
              <li key={m.timestamp}>
                <EmailDisplay {...m} />
              </li>
            ))}
          </ul>
        ) : (
          preview()
        )}
      </button>
    </div>
  );
}
