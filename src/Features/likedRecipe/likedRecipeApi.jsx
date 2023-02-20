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
        url: `liked-recipe/${id}`,
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    getLikedRecipeByIdUser: builder.query({
      query: () => ({
        url: `liked-recipe/user`,
      }),
      providesTags: ['LikedRecipe'],
      transformResponse: (response, meta, arg) => response,
    }),

    createLikedRecipe: builder.mutation({
      query: ({ id_recipe }) => {
        return {
          url: `recipe/${id_recipe}/liked-recipe`,
          method: 'POST',
        };
      },

      invalidatesTags: ['LikedRecipe', 'User'],
      transformResponse: (response, meta, arg) => response,
    }),

    updateLikedRecipe: builder.mutation({
      query: ({ id, data }) => ({
        url: `liked-recipes/${id}`,
        method: 'PUT',
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    deleteLikedRecipe: builder.mutation({
      query: ({ id }) => ({
        url: `recipe/${id}/liked-recipe`,
        method: 'DELETE',
      }),
      invalidatesTags: ['LikedRecipe', 'User'],
      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllLikedRecipeApiQuery, useGetLikedRecipeByIdQuery, useCreateLikedRecipeMutation, useUpdateLikedRecipeMutation, useDeleteLikedRecipeMutation, useGetLikedRecipeByIdUserQuery } = likedRecipeApi;
