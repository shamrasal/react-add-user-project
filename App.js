import React, { useState } from "react";
import NewUser from "./components/NewUser";
import UserForm from "./components/UserForm"
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const [userInfo, setuserInfo] = useState([]);
  const [available, setavailable] = useState(true);

  const submiHandler = (user) => {
    setuserInfo((previous) => {
      return [user, ...previous]
    })
  }

  return (
    <Wrapper>
      <UserForm onSubmitClick={submiHandler}></UserForm>
      <NewUser input={userInfo} />
    </Wrapper>
  );
}

export default App;
