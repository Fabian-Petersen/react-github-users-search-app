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
  //request loading
  const [request, setRequest] = useState(0);
  const [loading, setIsLoading] = useState(false);

  //error
  const [error, setError] = useState({ show: false, msg: "" });

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        console.log(remaining);
        setRequest(remaining);
        if (remaining === 0) {
          //throw an error if you dont have any requests.
          toggleError(
            true,
            "Sorry, you have exceeded your hourly requests limit. Please try again later!!"
          );
        }
      })
      .catch((error) => console.log(error));
  };

  // Error
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }
  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{ user, userRepos, userFollowers, request, error }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
