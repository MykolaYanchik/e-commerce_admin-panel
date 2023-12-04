import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { customBaseQuery } from "./customBaseQuery";

const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: customBaseQuery,
  keepUnusedDataFor: 30,
  credentials: true,
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
