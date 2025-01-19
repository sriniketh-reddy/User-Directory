import { useParams, useNavigate } from "react-router-dom";
import UsersContext from "../../context/UsersContext"
import "../../styles.css";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <UsersContext.Consumer>
        {value=>
            {   console.log(value);
                const user = value.getUserById(value.users,parseInt(id));
                console.log(user);
                return (
                    <div className="user-detail">
                        <h1>{user.name}</h1>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Company: {user.company.name}</p>
                        <p>Website: {user.website}</p>
                        <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
                    </div>
                )
            }
        }
    </UsersContext.Consumer>
  );
};

export default UserDetails;