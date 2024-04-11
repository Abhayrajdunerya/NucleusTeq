import React from 'react'
import { useGetSuperHerosByIds } from '../lib/react-query/queries'

const DynamicParallel = ({ heroIds }) => {

    const { data: superHeros } = useGetSuperHerosByIds({heroIds});

    console.log(superHeros);

  return (
    <div>
        <div className="super-heros m-4 p-8 bg-slate-100">
            {/* {superHeros && superHeros.data && superHeros.data && superHeros.data.map(hero =>
                <div key={hero.id} className="">{hero.name}</div>
            )} */}
        </div>
    </div>
  )
}

export default DynamicParallel