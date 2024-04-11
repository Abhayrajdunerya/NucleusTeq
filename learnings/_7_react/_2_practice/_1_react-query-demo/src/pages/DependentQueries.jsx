import React from 'react'
import { useGetCoursesByChannelId, useGetUserByEmail } from '../lib/react-query/queries'

const DependentQueries = ({email}) => {

    const { data: user } = useGetUserByEmail(email);
    // console.log("user: ", user.data);

    const { data: channelDate } = useGetCoursesByChannelId(user?.data.channelId);
    // console.log("channel: ", channelDate.data);

  return (
    <div>
        {user && user.data && <div className="m-2 p-2 bg-slate-100 rounded gap-2">
            <div className="">UserId: {user.data.id}</div>
            <div className="">ChannelId: {user.data.channelId}</div>
        </div>}
        {channelDate && channelDate.data && <div className='m-2 p-2 bg-slate-100 rounded gap-'>
            <div className="">ChannelId: {channelDate.data.id}</div>    
            <div className="">Courses: 
                {channelDate.data.courses.map(course => (
                    <div key={course} className="">- {course}</div>
                ))}
            </div>    
        </div>}
    </div>
  )
}

export default DependentQueries