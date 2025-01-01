import {
  type ChangeEvent,
  type Dispatch,
  useContext,
  useMemo,
  useState,
} from "react";
import type { EmailThread } from "../types/EmailThread";
import EmailDisplay from "./EmailDisplay";
import useSet from "../hooks/UseSet";
import ReplyBox from "./ReplyBox";
import type { EmailThreadAction } from "../reducers/EmailThreadReducer";
import { UsernameContext } from "../contexts/UsernameContext";
import Assigned from "./Assigned";

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
  const [assignInput, setAssignInput] = useState("");
  const [reply, setReply] = useState("");
  const username = useContext(UsernameContext);

  const sortedEmails = useMemo(() => {
    return [...emails].sort(
      (a, b) => Number(b.timestamp) - Number(a.timestamp),
    );
  }, [emails]);

  const preview = () => {
    const maxPreviewLen = 70;
    const body = sortedEmails[0]?.body ?? "";
    const truncated =
      body.length > maxPreviewLen ? `${body.slice(0, maxPreviewLen)}...` : body;
    return (
      <>
        {assignees.size > 0 && <strong>Preview:</strong>}
        <p className="p-2">{truncated}</p>
      </>
    );
  };

  const handleReplyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.target.value);
  };

  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      onKeyUp={() => setShowDetails(!showDetails)}
      className="m-2 p-2 bg-sky-100 border-solid border-2 border-sky-500 rounded shadow"
    >
      <div className="flex">
        <button type="button" onClick={() => setShowDetails(!showDetails)}>
          <strong>{sender}</strong>: {subject}
        </button>
        <input
          className="px-2 ml-auto rounded-bl-lg rounded-tl-lg"
          placeholder="Assign..."
          value={assignInput}
          onKeyUp={(event) => event.stopPropagation()}
          onClick={(event) => event.stopPropagation()}
          onChange={(event) => setAssignInput(event.target.value)}
        />
        <button
          className="px-2 bg-sky-300 rounded-br-lg rounded-tr-lg"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            addAssignee(assignInput);
            setAssignInput("");
          }}
        >
          Assign
        </button>
        <button
          className="mx-1 px-2 bg-sky-300 rounded-full"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setShowDetails(true);
            setShowReplyBox(!showReplyBox);
          }}
        >
          Reply
        </button>
      </div>
      {assignees.size > 0 && (
        <Assigned assignees={[...assignees]} onClickRm={(a) => rmAssignee(a)} />
      )}
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
      <div className="text-left">
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
      </div>
    </div>
  );
}
