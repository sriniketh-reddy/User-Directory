import UsersList from "../UsersList";
import UsersContext from "../../context/UsersContext"
import "../../styles.css";

const Home = () => {

  return (
    <UsersContext.Consumer>
        {value => (
            <div className="container">
                <h1 className="title">User Directory</h1>
                <div className="manipulator-container">
                    <input
                        type="search"
                        placeholder="Search users by name"
                        value={value.searchInput}
                        onChange={(e) => value.changeSearchInput(e.target.value)}
                        className="search-bar"
                        />
                    <button onClick={() => value.changeSortOrder(value.sortOrder === "asc" ? "desc" : "asc")}
                        className="sort-button">
                        Sort {value.sortOrder === "asc" ? "Z-A" : "A-Z"}
                    </button>
                </div>
                <UsersList />
            </div>)
        }
    </UsersContext.Consumer>
  );
};

export default Home;
