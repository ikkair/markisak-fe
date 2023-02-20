import { apiSlice } from '../../Api/authApi';

const likedRecipeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLikedRecipeApi: builder.query({
      query: () => ({
        url: 'liked-recipes',
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    getLikedRecipeById: builder.query({
      query: (id) => ({
        url: `liked-recipes/${id}`,
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    getLikedRecipeByIdUser: builder.query({
      query: (id) => ({
        url: `liked-recipes/${id}/users`,
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    createLikedRecipe: builder.mutation({
      query: ({ id_recipe }) => ({
        url: `recipe/${id_recipe}/liked-recipe`,
        method: 'POST',
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    updateLikedRecipe: builder.mutation({
      query: ({ id, data }) => ({
        url: `liked-recipes/${id}`,
        method: 'PUT',
        body: data,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    deleteLikedRecipe: builder.mutation({
      query: (id) => ({
        url: `liked-recipes/${id}`,
        method: 'DELETE',
      }),

      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllLikedRecipeApiQuery, useGetLikedRecipeByIdQuery, useCreateLikedRecipeMutation, useUpdateLikedRecipeMutation, useDeleteLikedRecipeMutation, useGetLikedRecipeByIdUserQuery } = likedRecipeApi;
