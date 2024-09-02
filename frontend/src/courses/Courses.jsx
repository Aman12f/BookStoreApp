import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses(props) {
  const {filteredBook, setFilteredBook, book} = props
  return (
    <>
      <Navbar setFilteredBook={setFilteredBook} book={book} filteredBook={filteredBook}/>
      <div className=" min-h-screen">
        <Course setFilteredBook={setFilteredBook} book={book} filteredBook={filteredBook}/>
      </div>
      <Footer />
    </>
  );
}

export default Courses;

