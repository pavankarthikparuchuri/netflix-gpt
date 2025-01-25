import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browse = () => {
  const email = useSelector((state) => state.user);
  console.log(email?.uid, email?.displayName, email?.email, "::email");
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
