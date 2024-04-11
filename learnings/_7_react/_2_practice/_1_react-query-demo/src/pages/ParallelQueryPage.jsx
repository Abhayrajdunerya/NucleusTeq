import React from 'react'
import { useGetFriends, useGetSuperHeros } from '../lib/react-query/queries'

const ParallelQueryPage = () => {

    const { data: superHeros } = useGetSuperHeros();

    const { data: friends } = useGetFriends();

  return (
    <div>
        <div className="super-heros m-4 p-8 bg-slate-100">
            {superHeros && superHeros?.data && superHeros.data.map(hero =>
                <div key={hero.id} className="">{hero.name}</div>
            )}
        </div>
        <div className="frineds m-4 p-8 bg-slate-100">
            {friends && friends?.data && friends.data.map(friend =>
                <div key={friend.id} className="">{friend.name}</div>
            )}
        </div>
    </div>
  )
}

export default ParallelQueryPage