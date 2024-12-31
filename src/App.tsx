import { type ChangeEvent, useState } from "react";
import EmailThreadDisplay from "./components/EmailThreadDisplay";
import fakeData from "./fake-data";

type Replies = { [key: number]: string };

function App() {
  const [threads, setThreads] = useState(fakeData);
  const [replies, setReplies] = useState<Replies>({});
  const [selectedReply, setSelectedReply] = useState<number | null>(null);

  const username = "me@example.com";

  const handleReplyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedReply === null) {
      return;
    }
    setReplies({
      ...replies,
      [selectedReply]: event.target.value,
    });
  };

  const createUpdatedThread = (id: number) => {
    const body = replies[id] ?? "";
    const timestamp = new Date().getTime();
    const threadToUpdate = threads[id];
    const updatedEmails = [
      ...threadToUpdate.emails,
      { body, timestamp, sender: username },
    ];
    const updatedThread = {
      ...threadToUpdate,
      emails: updatedEmails,
    };
    return updatedThread;
  };

  const handleSend = () => {
    if (selectedReply === null) {
      return;
    }

    const updatedThread = createUpdatedThread(selectedReply);

    setThreads((threads) =>
      threads.map((thread) =>
        thread.id === selectedReply ? updatedThread : thread,
      ),
    );
    setReplies({
      ...replies,
      [selectedReply]: "",
    });
  };

  return (
    <>
      <h1>Hoshii Mail</h1>
      <EmailThreadDisplay
        emailThreads={threads}
        onSelectReply={(n) => setSelectedReply(n)}
      />
      {selectedReply !== null && (
        <div className="fixed bottom-4 right-4">
          <p>Replying to {threads[selectedReply].sender}</p>
          <button type="button" onClick={() => setSelectedReply(null)}>
            X
          </button>
          <textarea
            value={replies[selectedReply] ?? ""}
            onChange={handleReplyChange}
          />
          <button type="button" onClick={handleSend}>
            Send
          </button>
        </div>
      )}
    </>
  );
}

export default App;
