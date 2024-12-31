import { type ChangeEvent, useState } from "react";
import EmailThreadDisplay from "./components/EmailThreadDisplay";
import fakeData from "./fake-data";
import ReplyBox from "./components/ReplyBox";
type Replies = { [key: number]: string };

function App() {
  const [threads, setThreads] = useState(fakeData);
  const [selectedReply, setSelectedReply] = useState<number | null>(null);
  const [replies, setReplies] = useState<Replies>({});

  const username = "me@example.com";

  const handleReplyBoxChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
    const timestamp = new Date();
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
    setSelectedReply(null);
  };

  return (
    <div className="bg-blue-50">
      <h1 className="text-4xl">Hoshii Mail</h1>
      <EmailThreadDisplay
        emailThreads={threads}
        onSelectReply={(n) => setSelectedReply(n)}
      />
      {selectedReply !== null && (
        <ReplyBox
          toWhom={threads[selectedReply].sender}
          value={replies[selectedReply] ?? ""}
          onChange={handleReplyBoxChange}
          onClickClose={() => setSelectedReply(null)}
          onClickSend={handleSend}
        />
      )}
    </div>
  );
}

export default App;
