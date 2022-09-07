import React from "react";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import { Routes, Route, Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

function BackButton() {
  return (
    <>
      <div>
        <Link go="middlesection">Hello</Link>
      </div>
      <Routes>
        <Route path="/middlesection" element={<MiddleSection />} />
        <Route path="/rightsection" element={<RightSection />} />
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </>
  );
}

export default BackButton;
