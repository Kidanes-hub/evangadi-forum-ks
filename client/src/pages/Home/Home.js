import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import axiosBase from "../../components/axios";
import { useNavigate } from "react-router-dom";
import QuestionDetail from "../Questions/QuestionDetail";
import { AppState } from "../../App";

function Home() {
  // eslint-disable-next-line no-unused-vars
  // const { user } = useContext(AppState);
  const { user, setUser } = useContext(AppState);

  // console.log(user);
  const [question, setQuestions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  const [Filter, setFilter] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const axios = axiosBase();
  const handleclick = () => {
    navigate("/askquestion");
  };

  const handleClick = () => {
    // Define newUser here or get it from somewhere
    const newUser = { username: "JohnDoe" }; // Replace with your actual user object or logic

    // Example usage of newUser
    setUser(newUser);
  };

  useEffect(() => {
    allQuestions();
  }, []);
  //all questions load here
  const allQuestions = async () => {
    try {
      const data = await axios.get("/questions/all-questions", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setQuestions(data?.data?.allQuestion);
    } catch (error) {
      console.log(error.response);
    }
  };

  // allQuestions()
  useEffect(() => {
    setFilter(
      question.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, question]);
  return (
    <section className="container">
      <div className="homp ">
        <div className=" hed ">
          <div className="row askQuestion">
            <div className="col-md-6   ">
              <button className="questionButton" onClick={handleclick}>
                Ask Question
              </button>
            </div>
            <div className="col-md-6 ">
              {/* <h2 className="wel  text-md-end">Welcome: {user?.username}</h2> */}
              <h2 className="wel text-md-end" onClick={handleClick}>
                {user ? `Welcome: ${user.username}` : "Welcome: Guest"}
              </h2>
            </div>
          </div>
        </div>
        <h3 className="ns">Questions</h3>
      </div>
      <div>
        <div>
          {Filter.map((quest, i) => (
            <QuestionDetail question={quest} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
