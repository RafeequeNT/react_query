import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroDetail = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const UseSuperHeroDetail = (useHeroObject, heroId) => {
  return useQuery(["superHero", heroId], () => fetchSuperHeroDetail(heroId), {
    onSuccess: useHeroObject.onSuccess,
    onError: useHeroObject.onError,
    // staleTime: 3000,
    // refetchInterval: 2000,
    // enabled: useHeroObject.isEnabled,
    refetch: false,
    // cacheTime: 0,
    // refetchOnMount: true,

    select: (data) => {
      const superHeroesData = data?.data;

      return superHeroesData;
    },
  });
};
