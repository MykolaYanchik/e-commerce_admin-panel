import { setFormErrorAction } from "../slices/common";
import commonApi from "./index";

const extendApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation({
      query: ({ data }) => ({
        url: "/user/registration",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ runSideEffects }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("auth", data.accessToken);
          if (runSideEffects) runSideEffects();
        } catch (e) {
          const { error } = e;
          console.error(error.data.message);
          dispatch(setFormErrorAction(error?.data?.message));
        }
      },
    }),
    login: build.mutation({
      query: ({ data }) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ runSideEffects }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("auth", data.accessToken);
          if (runSideEffects) runSideEffects();
        } catch (e) {
          const { error } = e;
          console.log(error);
          dispatch(setFormErrorAction(error?.data?.message));
        }
      },
    }),

    refresh: build.mutation({
      query: () => ({
        url: "/user/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation, useRefreshMutation } =
  extendApi;
