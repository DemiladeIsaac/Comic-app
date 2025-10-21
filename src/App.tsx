import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import BrowseComics from "./pages/BrowseComics";
import Profile from "./pages/Profile";
import Reader from "./pages/Reader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<Landing />} />
        <Route path="/browse" element={<BrowseComics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reader" element={<Reader />} />
      </Route>
    </Routes>
  );
}

export default App;
