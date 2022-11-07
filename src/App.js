import {BrowserRouter, Routes, Route} from "react-router-dom"


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
      <h1>Away Days</h1>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/create-event" element={<CreateEvent />}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
