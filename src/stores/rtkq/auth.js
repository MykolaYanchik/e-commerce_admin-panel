import { setFormErrorAction, setUserAction } from "../slices/common";
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
          console.log(data);
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
          dispatch(setUserAction(data));
          localStorage.setItem("token", data.token);
          if (runSideEffects) runSideEffects();
        } catch (e) {
          const { error } = e;
          console.log(error);
          dispatch(setFormErrorAction(error?.data?.message));
        }
      },
    }),
    getUser: build.query({
      query: (token) => ({ url: `/user/${token}` }),
      transformResponse: response => {
        return response
      },
      async onQueryStarted({runSideEffects}, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setUserAction(data));
        if (runSideEffects) runSideEffects();
      }
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation, useGetUserQuery } =
  extendApi;
