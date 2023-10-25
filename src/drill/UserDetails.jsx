import React from 'react'

const UserDetails = ({id, name, username, email, phone, website}) => {
  return (
    <div>
      <p>User id: {id}</p>
      <p>User name: {name}</p>
      <p>User username: {username}</p>
      <p>User email: {email}</p>
      <p>User phone: {phone}</p>
      <p>User website: {website}</p>
    </div>
  )
}

export default UserDetails