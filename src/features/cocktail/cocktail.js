import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/" }),
  endpoints: (builder) => ({
    cocktailCategory: builder.query({
      query: () => ({
        url: "filter.php",
        params: {
          c: "Cocktail",
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useCocktailCategoryQuery, useLazyCocktailCategoryQuery } = cocktailApi;
