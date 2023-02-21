import { apiSlice } from '../../Api/authApi';

apiSlice.enhanceEndpoints({ addTagTypes: ['Video'] });

const videoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideo: builder.query({
      query: () => ({
        url: 'videos',
      }),
      providesTags: (result, error, arg) => (result ? [...result.map((data) => ({ type: 'Video', data }))] : ['Video']),
      transformResponse: (response, meta, arg) => response,
    }),

    getVideoById: builder.query({
      query: (id) => ({
        url: `videos/${id}`,
      }),
      providesTags: (result, error, arg) => (result ? [...result.map((data) => ({ type: 'Video', data }))] : ['Video']),
      transformResponse: (response, meta, arg) => response,
    }),

    createVideo: builder.mutation({
      query: ({ id_recipe, ...data }) => ({
        url: `recipe/${id_recipe}/video`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['Video'],
      transformResponse: (response, meta, arg) => response,
    }),

    updateVideoById: builder.mutation({
      query: ({ id, data }) => ({
        url: `videos/${id}`,
        method: 'PUT',
        body: data,
      }),

      invalidatesTags: ['Video'],
      transformResponse: (response, meta, arg) => response,
    }),

    deleteVideoById: builder.mutation({
      query: (id) => ({
        url: `videos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Video'],
      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const { useGetAllVideoQuery, useGetVideoByIdQuery, useCreateVideoMutation, useUpdateVideoByIdMutation, useDeleteVideoByIdMutation } = videoApi;
