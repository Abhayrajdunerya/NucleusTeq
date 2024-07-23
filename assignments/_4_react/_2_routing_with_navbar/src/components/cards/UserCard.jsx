import React from 'react'
import './UserCard.css'

const UserCard = ({user}) => {
  return (
    <div className="user-card">
        <div className="name"> Name : {user.name}</div>
        <div className="email"> Email : {user.email}</div>
        <div className="phone"> Phone : {user.phone}</div>
    </div>
  )
}

export default UserCard