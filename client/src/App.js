import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "./components/axiosConfig";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import SignUp from "./pages/SignIn/SignUp";
import SignIn from "./pages/SignUp/SignIn";
import Home from "./pages/Home/Home";
import NewQuestion from "./pages/Questions/NewQuestion";
import Answer from "./pages/Answers/Answer";
export const AppState = createContext();

function App() {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
      console.log(data);
    } catch (error) {
      navigate("/login");
      return error.response;
    }
  }

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Header />
      <Routes>
        <Route path="/askquestion" element={<NewQuestion />} />
        <Route path="/Answer/:questionid" element={<Answer />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
      <Footer />
    </AppState.Provider>
  );
}

export default App;
