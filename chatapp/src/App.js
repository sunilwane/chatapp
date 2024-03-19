import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./Component/MainContainer";
import LoginComponenet from "./Component/LoginComponenet";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Component/Welcome";
import Chatarea from "./Component/Chatarea";
import Groups from "./Component/Groups";
import Users from "./Component/Users";
import CreateGroup from "./Component/CreateGroup";
import Users_groups from "./Component/Users_groups";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponenet />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<Chatarea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Users_groups />}></Route>
          <Route path="create-groups" element={<CreateGroup />}></Route>
        </Route>
      </Routes>
      {/* <MainContainer /> */}
      {/* <LoginComponenet /> */}
    </div>
  );
}

export default App;
