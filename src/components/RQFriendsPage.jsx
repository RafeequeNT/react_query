import { useState } from "react";
import { UseSuperHero } from "../hooks/useSuperHero";

export const RQFriendsPage = () => {
  const [enabled, setEnabled] = useState(false);

  const onSuccess = (data) => {
    console.log("data", data);
    if (data) {
      setEnabled(false);
    }
  };
  const onError = (err) => {
    console.log("error", err.message);
  };
  const useHeroObject = {
    onSuccess: onSuccess,
    onError: onError,
    isEnabled: enabled,
  };

  const { isLoading, data, isError, refetch } = UseSuperHero(useHeroObject);

  return (
    <div className="wrap-superheroes">
      <div>
        <h3>Super Heroes</h3>

        {isLoading
          ? "Loading..."
          : !isError
          ? data?.map((item) => <div key={item.id}>{item.name}</div>)
          : "something went wrong"}
        <br />
        <button onClick={refetch}>OnClick</button>
      </div>
    </div>
  );
};
