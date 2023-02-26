import React from "react";
import { useParams } from "react-router-dom";
import { UseSuperHeroDetail } from "../hooks/useSuperHeroDetail";

export const RQSuperHeroDetailPage = () => {
  const onSuccess = (data) => {
    console.log("data", data);
  };
  const onError = (err) => {
    console.log("error", err.message);
  };

  const { id: heroId } = useParams();

  const useHeroObject = {
    onSuccess: onSuccess,
    onError: onError,
    isEnabled: true,
  };

  const { isLoading, data, isError } = UseSuperHeroDetail(
    useHeroObject,
    heroId
  );

  if (isError) {
    return <>Something went wrong</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3> RQSuperHeroDetailPage</h3>

        <div>{data?.name}</div>

        <div>{data.alterEgo}</div>
      </div>
    </div>
  );
};
