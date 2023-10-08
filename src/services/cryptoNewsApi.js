
// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/search',
//     params: {
//       q: '<REQUIRED>',
//       safeSearch: 'Off',
//       textFormat: 'Raw',
//       freshness: 'Day',
//       count: '2'
//     },
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': 'ecbd386f8fmsh8b37598b42f4860p1afcabjsn61dcf748881e',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };
  
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '82cc987216msh9958992c7b39d17p1c1eb6jsndf50d4d1cfaa',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

export const cryptoNewsApi = createApi({
    reducerPath: " cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({q,count}) => ({
                
               url:(`/news/search`),
               headers:cryptoNewsApiHeaders,
               params: {
                       q,
                       safeSearch: 'Off',
                       textFormat: 'Raw',
                       freshness: 'Day',
                       count
                     },
            })                      
        })
    })

})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi