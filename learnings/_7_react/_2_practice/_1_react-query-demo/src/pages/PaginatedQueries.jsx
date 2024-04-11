import React, { useState } from 'react'
import { useGetColors } from '../lib/react-query/queries'

const PaginatedQueries = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [limit, setLimit] = useState(2);

    const { data: colorsData, isLoading, isError, error, isFetching } = useGetColors(limit, pageNumber);

    if (isLoading || isFetching) {
        return <div className="text-xl font-bold text-red-600">Loading ...</div>
    }

    if (isError) {
        return <div className="text-xl font-bold text-red-600">{error.message}</div>
    }



  return (
    <div>
        <div className="">
            {colorsData.data.map(color => (
                <div key={color.id} className="">
                    <div className={`text-xl font-bold text-${color.label}-600`} >
                        {color.id} - {color.label}
                    </div>
                </div>
            ))}
        </div>
        <div className="flex m-2 p-2 gap-3">
            <button 
                className='bg-slate-200 hover:bg-slate-400 transition py-2 px-3 rounded cursor-pointer'
                onClick={() => setPageNumber((page) => page-1)}
                disabled={pageNumber === 1}
            >
                Prev
            </button>
            <button 
                className='bg-slate-200 hover:bg-slate-400 transition py-2 px-3 rounded cursor-pointer'
                onClick={() => setPageNumber((page) => page+1)}
                disabled={pageNumber === 5}
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default PaginatedQueries