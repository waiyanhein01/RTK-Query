import { ApiService } from "../api.service";

const todoEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
    }),

    postTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        method: "POST",
        body: formData,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = todoEndpoints;

// query => GET
// mutation => POST,PUT,PATCH,DELETE
