import EmailThreadDisplay from "./components/EmailThreadDisplay";
import fakeData from "./fake-data";
function App() {
  return <EmailThreadDisplay emailThreads={fakeData} />;
}

export default App;
