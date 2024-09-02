import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Home(props) {
  const {setFilteredBook,book,filteredBook} = props
  useEffect(() => {
    console.log("Hii this is Home rendering");
    console.log("Checking setfilteredBook ", setFilteredBook);
    
  }, []);
  
  return (
    <>
      <Navbar setFilteredBook={setFilteredBook} book={book} filteredBook={filteredBook}/>
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
