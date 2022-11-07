import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DataStore } from "@aws-amplify/datastore";
import { Users } from "./models";

async function addData() {
  await DataStore.save(
    new Users({
      name: "S",
      lastname: "P",
      email: "test12@outlook.com",
    })
  );
  const models = await DataStore.query(Users);
  console.log(models);
}

function App() {
  return (
    <div className="App">
      <button onClick={addData}>Click</button>
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
