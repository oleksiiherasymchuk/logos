import React from 'react'

const UserAddress = ({address}) => {

  return (
    <div>
      <p>User street: {address.street}</p>
      <p>User suite: {address.suite}</p>
      <p>User city: {address.city}</p>
    </div>
  )
}

export default UserAddress;