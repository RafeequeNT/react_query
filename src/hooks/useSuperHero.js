import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const UseSuperHero = (useHeroObject) => {
  return useQuery("superHero", fetchSuperHeros, {
    onSuccess: useHeroObject.onSuccess,
    onError: useHeroObject.onError,
    // staleTime: 3000,
    // refetchInterval: 2000,
    enabled: useHeroObject.isEnabled,
    // refetch: false,
    // cacheTime: 0,

    select: (data) => {
      const superHeroesData = [...data?.data];

      return superHeroesData;
    },
  });
};
