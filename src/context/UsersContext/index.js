import { createContext } from "react";

const UsersContext = createContext({
    users: [],
    getUserById: ()=>{},
    searchInput: "",
    changeSearchInput: ()=>{}, 
    sortOrder: "",
    changeSortOrder: ()=>{},
});

export default UsersContext;