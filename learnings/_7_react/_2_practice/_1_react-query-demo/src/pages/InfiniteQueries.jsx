import React, { Fragment } from 'react'
import { useGetAllColors, useGetAllColorsInfiniteQuery } from '../lib/react-query/queries';

const InfiniteQueries = () => {


    const { data: colorsData, isLoading, isError, error, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetAllColorsInfiniteQuery();

    if (isLoading) {
        return <div className="text-xl font-bold text-red-600">Loading ...</div>
    }

    if (isError) {
        return <div className="text-xl font-bold text-red-600">{error.message}</div>
    }

  return (
    <div className='m-2'>
        <div className="p-2 m-2 gap-3">
            {colorsData.pages.map((group, i) => (
                <Fragment key={i}>
                    {group.data.map((color, i) => (
                        <div key={color+i} className={`text-xl font-bold text-${color.label}-600`} >
                            {color.id} - {color.label}
                        </div>
                        ))}
                </Fragment>
            ))}
        </div>
        <div className="">
        <button 
                className='bg-slate-200 hover:bg-slate-400 transition py-2 px-3 m-2 rounded cursor-pointer'
                onClick={fetchNextPage}
                disabled={!hasNextPage}
            >
                Load more
            </button>
        </div>
        <div className="m-2">{isFetching && isFetchingNextPage ? 'Fetching next page ...' : null}</div>

    </div>
  )
}

export default InfiniteQueries