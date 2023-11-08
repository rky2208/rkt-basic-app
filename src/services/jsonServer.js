import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const jsonServerApi =  createApi({
    reducerPath:"jsonServerApi",
    baseQuery:fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    endpoints: (builder)=>({
        getAlbums:builder.query({
            //query:()=>`all?fields=name,flags`
            query:({url,method,params})=>({
                url:url??`/all`,
                method:method??"GET",
                params:params??"fields=name,flags"
        })
        })
    })
})

export const {useGetAlbumsQuery} =  jsonServerApi;