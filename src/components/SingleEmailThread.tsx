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
    <div
      onClick={() => setShowDetails(!showDetails)}
      onKeyDown={() => setShowDetails(!showDetails)}
      className="m-2 p-2 bg-sky-100 border-solid border-2 border-sky-500 rounded"
    >
      <div className="flex">
        <button type="button" onClick={() => setShowDetails(!showDetails)}>
          <strong>{sender}</strong>: {subject}
        </button>
        <input
          className="ml-auto rounded-bl-lg rounded-tl-lg"
          placeholder="Assign..."
          value={assignInput}
          onKeyDown={(event) => event.stopPropagation()}
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
          className="px-2 bg-sky-300 rounded-full"
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
          <>
            {assignees.size > 0 && (
              <>
                <strong>Assigned:</strong>
                {[...assignees].map((a) => (
                  <div key={a} className="flex bg-slate-200">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        rmAssignee(a);
                      }}
                    >
                      X
                    </button>
                    <p className="p-2">{a}</p>
                  </div>
                ))}
              </>
            )}
            <ul>
              {sortedEmails.map((m) => (
                <li key={m.timestamp.getTime()}>
                  <EmailDisplay {...m} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          preview()
        )}
      </div>
    </div>
  );
}
