import { apiSlice } from '../../Api/authApi';

const savedRecipeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSavedRecipeApi: builder.query({
      query: () => ({
        url: 'saved-recipes',
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    getSavedRecipeById: builder.query({
      query: (id) => ({
        url: `saved-recipes/${id}`,
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    createSavedRecipe: builder.mutation({
      query: ({ id_recipe }) => ({
        url: `recipe/${id_recipe}/saved-recipe`,
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    updateSavedRecipe: builder.mutation({
      query: ({ id, data }) => ({
        url: `saved-recipes/${id}`,
        method: 'PUT',
        body: data,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    deleteSavedRecipe: builder.mutation({
      query: (id) => ({
        url: `saved-recipes/${id}`,
        method: 'DELETE',
      }),

      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllSavedRecipeApiQuery, useGetSavedRecipeByIdQuery, useCreateSavedRecipeMutation, useUpdateSavedRecipeMutation, useDeleteSavedRecipeMutation } = savedRecipeApi;
