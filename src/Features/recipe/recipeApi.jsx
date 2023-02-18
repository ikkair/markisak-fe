import { apiSlice } from '../../Api/authApi';

apiSlice.enhanceEndpoints({ addTagTypes: ['Recipe'] });

const recipeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipe: builder.query({
      query: () => ({
        url: 'recipe',
      }),
      providesTags: (result, error, arg) => (result ? [...result.map((data) => ({ type: 'Recipe', data }))] : ['Recipe']),
      transformResponse: (response, meta, arg) => response.data,
    }),

    getRecipeById: builder.query({
      query: (id) => ({
        url: `recipe/${id}`,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data[0];
      },
    }),

    createRecipe: builder.mutation({
      query: (data) => ({
        url: `recipes`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['Recipe'],
      transformResponse: (response, meta, arg) => response,
    }),

    updateRecipeById: builder.mutation({
      query: ({ id, data }) => ({
        url: `recipes/${id}`,
        method: 'PUT',
        body: data,
      }),

      invalidatesTags: ['Recipe'],
      transformResponse: (response, meta, arg) => response,
    }),

    deleteRecipeById: builder.mutation({
      query: (id) => ({
        url: `recipes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Recipe'],
      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllRecipeQuery, useGetRecipeByIdQuery, useCreateRecipeMutation, useDeleteRecipeByIdMutation, useUpdateRecipeByIdMutation } = recipeApi;
