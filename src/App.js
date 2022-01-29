import { Routes, Route } from "react-router-dom";
import Layout from "./components/HOC/Layout";
import Profile from "./components/Pages/Profile";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countyName" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
