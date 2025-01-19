import React from "react";
import UserItem from "../UserItem";
import UsersContext from "../../context/UsersContext"
import "../../styles.css";

const UsersList = () => {

    const filteredUsers = (users,searchInput,sortOrder)=>users
    .filter((user) => user.name.toLowerCase().includes(searchInput.toLowerCase()))
    .sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    
    return (
        <UsersContext.Consumer>
            {
                value=>{
                    const users = filteredUsers(value.users,value.searchInput,value.sortOrder)
                    return (
                        <div className="user-list">
                        {users.map((user) => (
                            <UserItem key={user.id} user={user} />
                            ))}
                        </div>
                )}
            }
        </UsersContext.Consumer>
    );
};

export default UsersList;