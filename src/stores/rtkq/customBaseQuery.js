import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const customBaseQuery = async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({
    baseUrl: "http://localhost:5054/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("auth");
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  })(args, api, extraOptions);

  return result;
};
