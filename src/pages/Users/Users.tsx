import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "store/redux/users/selectors"; 
import { UsersPageWrapper, UserCard } from "./styles";

function Users() {
  const users = useSelector(selectAllUsers);

  return (
    <UsersPageWrapper>
      {users.map((user) => (
        <UserCard key={user.firstLastName}>
          <div>Name: {user.firstLastName}</div>
          <div>Age: {user.age}</div>
          <div>Job Title: {user.jobTitle}</div>
        </UserCard>
      ))}
    </UsersPageWrapper>
  );
}

export default Users;