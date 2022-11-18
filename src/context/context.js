import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

//This gives us access to the provider and consumer funtions
//Provider, Consumer - GithubContext.Provider
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={"hello"}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
