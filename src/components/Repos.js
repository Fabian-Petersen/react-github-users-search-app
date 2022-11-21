import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { userRepos } = useContext(GithubContext);
  //! Use the reduce function to calculate how many languages are in the user repository. The initial value is an empty object {}.
  const languages = userRepos.reduce((total, item) => {
    //! Assign the language property of the object to the item variable of the reduce function
    //? Stargazers are the values added to the object for the doughnut chart.
    const { language, stargazers_count } = item;
    //! Check if the value is null, if it is return to total
    if (!language) return total;
    //! Check if the language is already on the object, if not, add 1
    if (!total[language]) {
      // total[language] = 1;
      //? The below add the instances to the FusionCharts object to render the pieChart.
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      //! If not, add the language instance to the object.
      // total[language] = total[language] + 1;
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
      //$ The code has the top code hence can check if the below code will work the same to add a value
      // total[language] = { ...(total[language].value + 1) };
    }
    //return the sum of all instances.
    return total;
  }, {});

  //$ Object.values turn the Object into an array to manipulate the data with the sort and slice methods.
  //$ Slice return the 5 most popular languages, some users have more than 5 languages.
  //$ Sort return the languages with the highest instances
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  //Most starts per Language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  //stars, forks (bar charts)

  let { stars, forks } = userRepos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart /> */}
        <Pie3D data={mostUsed} />
        <Doughnut2D data={mostPopular} />
        <Column3D data={stars} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
