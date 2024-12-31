import EmailThreadDisplay from "./components/EmailThreadDisplay";
import fakeData from "./fake-data";
import { threadsReducer } from "./reducers/EmailThreadReducer";
import {
  EmailThreadsContext,
  EmailThreadsDispatchContext,
} from "./contexts/EmailThreadsContext";
import { createContext, useReducer, useState } from "react";
import { UsernameContext } from "./contexts/UsernameContext";

function App() {
  const [threads, _] = useState(fakeData);
  return (
    <div className="bg-blue-50">
      <h1 className="text-4xl">Hoshii Mail</h1>
      <UsernameContext.Provider value={"me@example.com"}>
        <EmailThreadDisplay emailThreads={threads} />
      </UsernameContext.Provider>
    </div>
  );
}

export default App;
