import { apiSlice } from '../../Api/authApi';

const recipeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipe: builder.query({
      query: () => ({
        url: 'recipes',
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    getRecipeById: builder.query({
      query: (id) => ({
        url: `recipes/${id}`,
      }),
      transformResponse: (response, meta, arg) => response,
    }),

    createRecipe: builder.mutation({
      query: (data) => ({
        url: `recipes`,
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    updateRecipeById: builder.mutation({
      query: ({ id, data }) => ({
        url: `recipes/${id}`,
        method: 'PUT',
        body: data,
      }),

      transformResponse: (response, meta, arg) => response,
    }),

    deleteRecipeById: builder.mutation({
      query: (id) => ({
        url: `recipes/${id}`,
        method: 'DELETE',
      }),

      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllRecipeQuery, useGetRecipeByIdQuery, useCreateRecipeMutation, useDeleteRecipeByIdMutation, useUpdateRecipeByIdMutation } = recipeApi;
