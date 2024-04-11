import React from 'react'
import { Link } from 'react-router-dom'

import { useAddSuperHero, useGetSuperHeros, useGetSuperHerosSelectNames } from '../lib/react-query/queries'
import Loading from '../components/Loading';
import { useState } from 'react';

const handleDataFetch = (isLoading, isFetching, isError, error) => {

    console.log('isLoading -> ', isLoading, 'isFetching -> ', isFetching);

    if (isError) {
        return <div className="">
            {error.message}
        </div>
    }

    if (isLoading || isFetching) {
        return  <Loading />
    }

}

const SuperHeros = () => {

    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');


    const { data: superHeros, isLoading: isSuperHerosLoading, isError: isSuperHerosError, error: superHerosError, isFetching: isSuperHerosFetching, refetch: superHerosRefetch } = useGetSuperHeros();
    handleDataFetch(isSuperHerosLoading, isSuperHerosFetching, isSuperHerosError, superHeros)

    // console.log(superHeros);


    const {data: superHeroNames, isLoading: isSuperHeroNamesLoading, isFetching: isSuperHeroNamesFetching, isError: isSuperHeroNamesError, error: superHeroNamesError, refetch: superHeroNamesRefetch} = useGetSuperHerosSelectNames();
    handleDataFetch(isSuperHeroNamesLoading, isSuperHeroNamesFetching, isSuperHeroNamesError, superHeroNamesError)


    const { mutate: addHero } = useAddSuperHero()
    const handleAddHero = () => {
        console.log({name, alterEgo});
        const hero = {name, alterEgo}
        addHero(hero)
    }


    console.log(superHeroNames);

  return (
    <div className='container'>
        <div className="m-2 text-2xl font-bold">Super Heros</div>
        <div className="m-2 flex gap-2">
            <input className='p-2 rounded border' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' />
            <input className='p-2 rounded border' type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} placeholder='Enter alter ego' />
            <button onClick={handleAddHero} className='py-2 px-3 rounded bg-slate-200 hover:bg-slate-300 cursor-pointer transition' >Add hero</button>
        </div>
        <button onClick={superHerosRefetch} className='px-3 py-2 rounded bg-slate-300 hover:bg-slate-400 transition m-2' >Re-fetch heros</button>
        <div className="gap-3 m-2">
            {superHeros && superHeros.data?.length && superHeros.data.map(hero => 
                <Link to={`/super-heros/${hero.id}`} key={hero.id} className='p-2 bg-slate-400 gap-2 flex m-2 rounded'>
                    <div className="">Name: {hero.name} </div> |
                    <div className="">Alter Ego: {hero.alterEgo} </div>
                </Link>)}
        </div>
        <button onClick={superHeroNamesRefetch} className='px-3 py-2 rounded bg-slate-300 hover:bg-slate-400 transition m-2' >Re-fetch hero names</button>
        <div className="gap-3 m-2">
            {superHeroNames && superHeroNames.map(hero => <div key={hero} className='p-2 bg-slate-400 gap-2 flex m-2 rounded'>
                <div className="">Name: {hero} </div>
            </div>)}
        </div>
    </div>
  )
}

export default SuperHeros