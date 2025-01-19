import Home from "./components/Home"
import { useState, useEffect} from "react";
import UserDetails from "./components/UserDetails"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Oval} from "react-loader-spinner";
import UsersContext from "./context/UsersContext"

const App = () => {
  const [users, setUsers] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          if (response.ok){
              const data = await response.json();
              setUsers(data);
              setLoading(false);
          }else{
              setError(response.error);
              setLoading(false);
          }
      };
  
      fetchUsers();
    }, []);

    if (loading) {
      return (
        <div className="loader-container">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="loading"
          />
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">Retry</button>
        </div>
      );
    }
  
    const getUserById = (users,id) => {
      return users.find(user => user.id === id);
    }
  
    const changeSearchInput = (searchInput) => {
      setSearchInput(searchInput);
    }
  
    const changeSortOrder = (sortOrder) => {
      setSortOrder(sortOrder);
    }

  return (
    <BrowserRouter>
      <UsersContext.Provider value={{users,getUserById,searchInput,changeSearchInput,sortOrder,changeSortOrder}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:id" element={<UserDetails />} />
        </Routes>
      </UsersContext.Provider>
    </BrowserRouter>
  )
}

export default App;
