import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

//This gives us access to the provider and consumer funtions
//Provider, Consumer - GithubContext.Provider
const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);
  //request loading
  const [request, setRequest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //error
  const [error, setError] = useState({ show: false, msg: "" });

  const searchUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );

    // console.log(response);

    if (response) {
      setGitUser(response.data);
    } else {
      //Toggle Error when data return null
      toggleError(true, "there is no such user, try again!!");
    }

    checkRequests();
    setIsLoading(false);
  };

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
  console.log(followers);
  return (
    <GithubContext.Provider
      value={{
        gitUser,
        repos,
        followers,
        request,
        error,
        searchUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
