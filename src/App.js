import logo from "./logo.svg";
import "./App.css";

// AWS
import { DataStore } from "@aws-amplify/datastore";
import { USERS } from "./models";

function App() {
  async function addData() {
    await DataStore.save(
      new USERS({
        name: "S",
        lastname: "P",
        email: "test12346789@testemailtestemail.com",
      })
    );
    const models = await DataStore.query(USERS);
    console.log(models);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={addData}>Click</button>
      </header>
    </div>
  );
}

export default App;
