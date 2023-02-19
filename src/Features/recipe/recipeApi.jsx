import { apiSlice } from '../../Api/authApi';

apiSlice.enhanceEndpoints({ addTagTypes: ['Recipe'] });

const recipeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipe: builder.query({
      query: ({ search, limit, sortBy, sort, page }) => {
        if (search) {
          return {
            url: `recipe?search=${search}&page=${page || 1}&limit=${limit || 8}&sortBy=${sortBy || 'like_count'}&sort=${sort || 'desc'}`,
          };
        }

        return {
          url: `recipe?page=${page || 1}&limit=${limit || 8}&sortBy=${sortBy || 'like_count'}&sort=${sort || 'desc'}`,
        };
      },
      providesTags: (result, error, arg) => (result ? [...result.data.map((data) => ({ type: 'Recipe', data }))] : ['Recipe']),
      transformResponse: (response, meta, arg) => response,
    }),

    getRecipeById: builder.query({
      query: (id) => ({
        url: `recipe/${id}`,
      }),

      providesTags: ['Recipe'],
      transformResponse: (response, meta, arg) => {
        return response.data[0];
      },
    }),

    createRecipe: builder.mutation({
      query: (data) => ({
        url: `recipe`,
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
        url: `recipe/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Recipe', 'User'],
      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllRecipeQuery, useGetRecipeByIdQuery, useCreateRecipeMutation, useDeleteRecipeByIdMutation, useUpdateRecipeByIdMutation } = recipeApi;
