import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeroDetail = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

//No intial query data

// export const UseSuperHeroDetail = (useHeroObject, heroId) => {
//   return useQuery(["superHero", heroId], () => fetchSuperHeroDetail(heroId), {
//     onSuccess: useHeroObject.onSuccess,
//     onError: useHeroObject.onError,

//     refetch: false,

//     select: (data) => {
//       const superHeroesData = data?.data;

//       return superHeroesData;
//     },
//   });
// };

// set initial query data

export const UseSuperHeroDetail = (useHeroObject, heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["superHero", heroId], () => fetchSuperHeroDetail(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("superHero")
        ?.data.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
    onSuccess: useHeroObject.onSuccess,
    onError: useHeroObject.onError,
  });
};
