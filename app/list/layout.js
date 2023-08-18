import Navbar from "@/components/list/Navbar";
import React from "react";
import SearchContextProvider from "./SearchContext";

const Layout = ({ children }) => {
  return (
    <div>
      <SearchContextProvider>
        <Navbar />
        {children}
      </SearchContextProvider>
    </div>
  );
};

export default Layout;
