import { apiSlice } from '../../Api/authApi';

apiSlice.enhanceEndpoints({ addTagTypes: ['Comment'] });

const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllComment: builder.query({
      query: (id) => {
        if (id) {
          return {
            url: `comments?id_recipe=${id}`,
          };
        }
        return {
          url: 'comments',
        };
      },
      providesTags: (result, error, arg) => (result ? [...result.map((data) => ({ type: 'Comment', data }))] : ['Comment']),
      transformResponse: (response, meta, arg) => response,
    }),

    getCommentByIdRecipe: builder.query({
      query: (id) => ({
        url: `comments/${id}/recipes`,
      }),
      providesTags: (result, error, arg) => (result ? [...result.map((data) => ({ type: 'Comment', data }))] : ['Comment']),
      transformResponse: (response, meta, arg) => response,
    }),

    createComment: builder.mutation({
      query: (data) => ({
        url: `comments`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['Comment'],
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
