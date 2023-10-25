import React from "react";
import UserDetails from "./UserDetails";
import UserAddress from "./UserAddress";
import UserCompany from "./UserCompany";

const User = (props) => {
  // console.log(props);
  return (
    <div className="User">
      <UserDetails
        id={props.user.id}
        name={props.user.name}
        username={props.user.username}
        email={props.user.email}
        phone={props.user.phone}
        website={props.user.website}
      />
      <hr style={{height: '1px', width: '100%'}}/>
      <UserAddress address={props.user.address} />
      <hr  style={{height: '1px', width: '100%'}}/>
      <UserCompany company={props.user.company} />
    </div>
  );
};

export default User;
