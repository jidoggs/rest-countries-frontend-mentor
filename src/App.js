import { Routes, Route } from "react-router-dom";
import Header from "./components/HOC/Header";
import Profile from "./components/Pages/Profile";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countyName" element={<Profile />} />
      </Routes>
    </Header>
  );
}

export default App;
