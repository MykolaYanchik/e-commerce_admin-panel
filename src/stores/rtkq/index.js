import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5054/api",
  }),
  keepUnusedDataFor: 30,
  endpoints: (build) => ({
    post: build.mutation({
      query: ({ data, url }) => {
        const config = {
          url: url,
          method: "POST",
          body: data,
        };
        return config;
      },
      async onQueryStarted({ runSideEffects }, { queryFulfilled }) {
        try {
          const { meta } = await queryFulfilled;
          if (runSideEffects) runSideEffects();
          console.log("Success", meta);
        } catch (errorObject) {
          const { error } = errorObject;
          console.error(error);
        }
      },
    }),
  }),
});

export const { usePostMutation } = commonApi;

export default commonApi;
