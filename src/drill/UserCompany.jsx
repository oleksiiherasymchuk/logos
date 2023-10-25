import React from 'react'


// Company - яка відображає name,catchPhrase,bs
const UserCompany = ({company}) => {
  return (
    <div>
      <p>User company name: {company.name}</p>
      <p>User company catchPhrase: {company.catchPhrase}</p>
      <p>User company bs: {company.bs}</p>
    </div>
  )
}

export default UserCompany