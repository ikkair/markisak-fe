import { apiSlice } from '../../Api/authApi';

const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllComment: builder.query({
      query: () => ({
        url: 'comments',
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    getCommentByIdRecipe: builder.query({
      query: (id) => ({
        url: `comments/${id}/recipes`,
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    createComment: builder.mutation({
      query: (data) => ({
        url: `comments`,
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    updateComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `comments/${id}`,
        method: 'PUT',
        body: data,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    deleteComments: builder.mutation({
      query: (id) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),

      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllLikedRecipeApiQuery, useGetLikedRecipeByIdQuery, useCreateLikedRecipeMutation, useUpdateLikedRecipeMutation, useDeleteLikedRecipeMutation, useGetLikedRecipeByIdUserQuery } = commentApi;
