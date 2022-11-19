import React, { useState, useEffect, createContext } from "react";
import user from "./mockData.js/mockUser";
import userRepos from "./mockData.js/mockRepos";
import userFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

//This gives us access to the provider and consumer funtions
//Provider, Consumer - GithubContext.Provider
const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={{ user, userRepos, userFollowers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
