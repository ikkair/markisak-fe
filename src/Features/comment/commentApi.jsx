import { apiSlice } from '../../Api/authApi';

apiSlice.enhanceEndpoints({ addTagTypes: ['Comment'] });

const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllComment: builder.query({
      query: () => {
        return {
          url: 'comment',
        };
      },
      providesTags: (result, error, arg) => (result ? [...result.map((data) => ({ type: 'Comment', data }))] : ['Comment']),
      transformResponse: (response, meta, arg) => response,
    }),

    getCommentByIdRecipe: builder.query({
      query: (id) => {
        return {
          url: `recipe/${id}/comment`,
        };
      },

      providesTags: (result, error, arg) => (result ? [...result.map((data) => ({ type: 'Comment', data }))] : ['Comment']),
      transformResponse: (response, meta, arg) => response,
    }),

    createComment: builder.mutation({
      query: ({ id_recipe, ...other }) => ({
        url: `recipe/${id_recipe}/comment`,
        method: 'POST',
        body: other,
      }),

      invalidatesTags: ['Comment'],
      transformResponse: (response, meta, arg) => response,
    }),

    updateComment: builder.mutation({
      query: ({ id_recipe, id, ...other }) => ({
        url: `recipe/${id_recipe}/comment/${id}`,
        method: 'PUT',
        body: other,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    deleteComments: builder.mutation({
      query: ({ id_recipe, id }) => ({
        url: `recipe/${id_recipe}/comment/${id}`,
        method: 'DELETE',
      }),

      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllCommentQuery, useGetCommentByIdRecipeQuery, useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentsMutation } = commentApi;
