import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const TOKEN = import.meta.env.VITE_CRYPTO_TOKEN
const CRYPTO_URL = import.meta.env.VITE_CRYPTO_URL

const cryptoApiHeaders = {
    // 'X-RapidAPI-Key': 'ecbd386f8fmsh8b37598b42f4860p1afcabjsn61dcf748881e',
    // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    'X-RapidAPI-Key': TOKEN,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = CRYPTO_URL

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
})
export const cryptoSlice   = createApi({
    reducerPath: " cryptoSlice",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
            // query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
           
        }),
        getCryptoHistory:builder.query({
            query: ({coinId,timePeriod}) => ({
              
               url:(`/coin/${coinId}/history`),
               headers:cryptoApiHeaders,
               params: {
             
                timePeriod
              },
            })
         
        }),
        getExchanges:builder.query({
            query: ({coinId,limit}) => ({
              
               url:(`/coin/${coinId}/exchanges`),
               headers:cryptoApiHeaders,
               params: {
                limit,
                offset: '0',
                orderBy: '24hVolume',
           
                orderDirection: 'desc'
               
              },
            })
         
        })
    })

})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
   useGetCryptoHistoryQuery,
   useGetExchangesQuery,
}=cryptoSlice 