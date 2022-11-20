import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { userRepos } = useContext(GithubContext);
  //! Use the reduce function to calculate how many languages are in the user repository. The initial value is an empty object {}.
  let languages = userRepos.reduce((total, item) => {
    //! Assign the language property of the object to the item variable of the reduce function
    const { language } = item;
    //! Check if the value is null, if it is return to total
    if (!language) return total;
    //! Check if the language is already on the object, if not, add 1
    if (!total[language]) {
      // total[language] = 1;
      //? The below add the instances to the FusionCharts object to render the pieChart.
      total[language] = { label: language, value: 1 };
    } else {
      //! If not, add the language instance to the object.
      // total[language] = total[language] + 1;
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
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
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <ExampleChart />
        <Pie3D data={languages} />
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
