import {
  type ChangeEvent,
  type Dispatch,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import type { EmailThread } from "../types/EmailThread";
import EmailDisplay from "./EmailDisplay";
import useSet from "../hooks/UseSet";
import ButtonWithDropDown from "./ButtonWithDropdown";
import ReplyBox from "./ReplyBox";
import {
  type EmailThreadAction,
  threadsReducer,
} from "../reducers/EmailThreadReducer";
import { UsernameContext } from "../contexts/UsernameContext";

type SingleEmailThreadProps = EmailThread & {
  dispatch: Dispatch<EmailThreadAction>;
};

export default function SingleEmailThread({
  sender,
  subject,
  emails,
  dispatch,
}: SingleEmailThreadProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [assignees, addAssignee, rmAssignee] = useSet<string>([]);
  const [reply, setReply] = useState("");
  const username = useContext(UsernameContext);

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

  const handleReplyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.target.value);
  };

  return (
    <div className="m-2 p-2 bg-sky-100 border-solid border-2 border-sky-500 rounded">
      <div className="flex">
        <button type="button" onClick={() => setShowDetails(!showDetails)}>
          <strong>{sender}</strong>: {subject}
        </button>
        <ButtonWithDropDown
          name="Assign"
          allOptions={assignOptions}
          clickedOptions={assignees}
          onClickOption={handleAssigneeChange}
        />
        <button
          className="px-2 bg-sky-300 rounded-full"
          type="button"
          onClick={() => {
            setShowDetails(true);
            setShowReplyBox(true);
          }}
        >
          Reply
        </button>
      </div>
      {showReplyBox && showDetails && (
        <ReplyBox
          toWhom={sender}
          value={reply}
          onChange={handleReplyChange}
          onClickClose={() => setShowReplyBox(false)}
          onClickSend={() => {
            dispatch({
              kind: "Add",
              payload: { sender: username, timestamp: new Date(), body: reply },
            });
            setShowReplyBox(false);
            setReply("");
          }}
        />
      )}
      <button
        className="text-left"
        type="button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? (
          <ul>
            {sortedEmails.map((m) => (
              <li key={m.timestamp.getTime()}>
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
