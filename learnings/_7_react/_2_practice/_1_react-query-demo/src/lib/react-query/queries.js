import {
    useInfiniteQuery,
    useMutation,
    useQueries,
    useQuery,
    useQueryClient
} from '@tanstack/react-query'

import { QUERY_KEYS } from './queryKey'

import { 
    getSuperHeros, 
    getSuperHeroById, 
    getFriends,
    getUserByEmail,
    getCoursesByChannelId,
    getColors,
    getAllColors,
    getColorsInfiniteQuery,
    addSuperHero
} from '../api/super-hero'

export const useGetSuperHeros = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.SUPER_HEROS], 
        queryFn: getSuperHeros,
        // staleTime: 10000,  // cashe
        // refetchOnMount: false,
        // refetchOnWindowFocus: true,
        // refetchInterval: 2000,
        // refetchIntervalInBackground: false,
        // enabled: false,
        
    })
}

export const useGetSuperHerosSelectNames = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.SUPER_HEROS_SELECT_NAMES],
        queryFn: getSuperHeros,
        enabled: false,
        select: (data) => {
            const superHeroNames = data.data.map(hero => hero.name)
            return superHeroNames
        },
    })
}

// export const useGetSuperHeroById = (id) => {
//     return useQuery({
//         queryKey: [QUERY_KEYS.SUPER_HERO_BY_ID],
//         queryFn: () => getSuperHeroById(id)
//     })
// }

export const useGetSuperHeroById = (id) => {
    return useQuery({
        queryKey: [QUERY_KEYS.SUPER_HERO_BY_ID, id],
        queryFn: getSuperHeroById
    })
}

export const useGetSuperHerosByIds = ({heroIds}) => {

    console.log(heroIds);
    
    const queryResult = useQueries(
        heroIds.map((id) => {
            return {
                queryKey: [QUERY_KEYS.SUPER_HERO_BY_ID, id],
                queryFn: () => getSuperHeroById
            }
        })
    )

    if (!heroIds || !Array.isArray(heroIds)) {
        console.error("Invalid heroIds:", heroIds);
        return [];
    }

    return queryResult;
}

export const useGetFriends = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.FRIENDS], 
        queryFn: getFriends,
    })
}

export const useGetUserByEmail = (email) => {
    return useQuery({
        queryKey: [QUERY_KEYS.USER, email],
        queryFn: () => getUserByEmail(email),
    })
}

export const useGetCoursesByChannelId = (channelId) => {
    return useQuery({
        queryKey: [QUERY_KEYS.COURSES, channelId],
        queryFn: () => getCoursesByChannelId(channelId),
        enabled: !!channelId
    })
}

export const useGetColors = (limit, pageNo) => {
    return useQuery({
        queryKey: [QUERY_KEYS.COLORS, limit, pageNo],
        queryFn: () => getColors(limit, pageNo),
        // staleTime: 10000
    })
}

export const useGetAllColors = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.COLORS],
        queryFn: getAllColors
    })
}

export const useGetAllColorsInfiniteQuery = () => {
    return useInfiniteQuery({
        queryKey: [QUERY_KEYS.COLORS],
        queryFn: getColorsInfiniteQuery,
        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length < 5) {
                return allPages.length+1
            } else {
                return undefined
            }
        }
    })
}

// export const useAddSuperHero = () => {
//     return useMutation(addSuperHero)
// }

export const useAddSuperHero = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addSuperHero,
        // onSuccess: (data) => {
        //     // queryClient.invalidateQueries(QUERY_KEYS.SUPER_HEROS)

        //     queryClient.setQueryData(QUERY_KEYS.SUPER_HEROS, (oldQueryData) => {
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData, data.data],
        //         }
        //     })
        // }
        
        onMutate: async (newHero) => {
            await queryClient.cancelQueries(QUERY_KEYS.SUPER_HEROS)
            const previousHeroData = queryClient.getQueriesData(QUERY_KEYS.SUPER_HEROS)
            queryClient.setQueryData(QUERY_KEYS.SUPER_HEROS, (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [
                        ...oldQueryData,
                        { id: oldQueryData?.data?.length + 1, ...newHero },
                    ],
                }
            })
            return {
                previousHeroData,
            }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueriesData(QUERY_KEYS.SUPER_HEROS, context.previousHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries(QUERY_KEYS.SUPER_HEROS)
        },
    })
}

