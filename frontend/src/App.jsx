import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [authUser, setAuthUser] = useAuth();

  const [filteredBook, setFilteredBook] = useState([]);
  const [book, setBook] = useState([]);

  useEffect(() => {
   console.log("Value of filteredbook is ",filteredBook);
   
  }, [filteredBook])
  


  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("Fetched book data:", res.data);
        setBook(res.data);
        setFilteredBook(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBook();
    console.log("setFilteredBook:", setFilteredBook);
  }, []);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home setFilteredBook={setFilteredBook} book={book} filteredBook={filteredBook}/>} />
        <Route
          path="/course"
          element={authUser ? <Courses setFilteredBook={setFilteredBook} book={book} filteredBook={filteredBook}/> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
