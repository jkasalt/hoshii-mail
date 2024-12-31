import { useMemo, useState } from "react";
import type { EmailThread } from "../types/EmailThread";
import EmailDisplay from "./EmailDisplay";
import useSet from "../hooks/UseSet";

type SingleEmailThreadProps = EmailThread & {
  onClickReply: () => void;
};

export default function SingleEmailThread({
  onClickReply,
  sender,
  subject,
  emails,
}: SingleEmailThreadProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showAssign, setShowAssign] = useState(false);
  const [assignees, addAssignee, rmAssignee] = useSet<string>([]);

  const sortedEmails = useMemo(() => {
    return [...emails].sort(
      (a, b) => Number(b.timestamp) - Number(a.timestamp),
    );
  }, [emails]);

  // TODO base assign options list is the set of all emails across all threads
  // TODO add input to search or add arbitrary assignee
  const assignOptions = ["a", "b", "c"];

  const preview = () => {
    const maxPreviewLen = 70;
    const body = sortedEmails[0]?.body ?? "";
    const truncated =
      body.length > maxPreviewLen ? `${body.slice(0, maxPreviewLen)}...` : body;
    return <p>{truncated}</p>;
  };

  const handleAssigneeChange = (opt: string) => {
    if (assignees.has(opt)) {
      rmAssignee(opt);
    } else {
      addAssignee(opt);
    }
  };

  return (
    <div>
      <div className="flex">
        <div>
          {sender} -- {subject}
        </div>
        <div className="ml-auto p-2">
          <button type="button" onClick={() => setShowAssign(!showAssign)}>
            Assign
          </button>
          {showAssign && (
            <div className="absolute">
              {assignOptions.map((opt) => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    checked={assignees.has(opt)}
                    onChange={() => handleAssigneeChange(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}
        </div>
        <button className="p-2" type="button" onClick={onClickReply}>
          Reply
        </button>
      </div>
      <button
        className="text-left"
        type="button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? (
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
