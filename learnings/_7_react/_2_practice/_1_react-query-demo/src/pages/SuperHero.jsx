import React from 'react'
import { useGetSuperHeroById } from '../lib/react-query/queries'
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';

const SuperHero = () => {

    const { heroId } = useParams();

    const { data, isLoading, isError, error, isFetching } = useGetSuperHeroById(heroId);

    if (isError) {
        return <div className="">
            {error.message}
        </div>
    }

    if (isLoading || isFetching) {
        return  <Loading />
    }


  return (
    <div className='justify-center m-auto'>
        <div className="p-8 rounded bg-slate-200 gap-4">
            <div className="">Hero Id: {data.data.id}</div>
            <div className="">Name: {data.data.name}</div>
            <div className="">Alter Ego: {data.data.alterEgo}</div>
        </div>
    </div>
  )
}

export default SuperHero