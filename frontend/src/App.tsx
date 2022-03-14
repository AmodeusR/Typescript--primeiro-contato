import { useState, useEffect } from "react";
import API from "./services/API";
import User from "./components/User";

interface IUser {
  name: string,
  email: string
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await API.get<IUser[]>("/users");
      setUsers(response.data);
      
    }
    
    fetchData();
  }, []);

  return (
    <div className="App">
      {users.map(user => (<User key={user.email} user={user} />))}
    </div>
  );
}

export default App;
