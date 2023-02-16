import "./App.css";
import Nav from "./Nav";
import ClinicalCalcs from "./ClinicalCalcs";
import FormsRisk from "./FormsRisk";
import Charts from "./Charts";
import HowTo from "./HowTo";
import Home from "./Home";
import SavedCards from "./pages/savedCards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/clinicalcalcs" element={<ClinicalCalcs />} />
        <Route exact path="/formsrisk" element={<FormsRisk />} />
        <Route exact path="/charts" element={<Charts />} />
        <Route exact path="/howto" element={<HowTo />} />
        <Route
          exact
          path="/savedcards"
          element={user ? <SavedCards /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/savedcards" />}
        />
        <Route
          exact
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}
/*Don't put the NavBar inside the Routes tag. Only Route tags can go inside the Routes tags. */
/*Learned how to use a multi-page website with react using this video https://www.youtube.com/watch?v=xMNhDf5-hvk  */
export default App;
