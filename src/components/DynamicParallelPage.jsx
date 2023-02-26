import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicParallelPage = ({ heroIds }) => {
  const querieResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  return (
    <>
      {" "}
      <h3>DynamicParallelPage</h3>{" "}
      <div>
        {querieResults.map((item) => (
          <div>{item?.data?.data.name}</div>
        ))}
      </div>
    </>
  );
};
