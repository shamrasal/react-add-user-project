import React, { useState } from "react";
import NewUser from "./components/NewUser";
import UserForm from "./components/UserForm"

function App() {
  const [userInfo, setuserInfo] = useState([]);

  const submiHandler = (user) => {
    setuserInfo((previous) => {
      return [user, ...previous]
    })
  }

  return (
    <div>
      <UserForm onSubmitClick={submiHandler}></UserForm>
      <NewUser input={userInfo} />
    </div>
  );
}

export default App;
