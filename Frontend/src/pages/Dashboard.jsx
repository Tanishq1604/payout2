import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";
import { baseURL } from "../../URLs";

const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBalance() {
      try {
        const response = await axios.get(`${baseURL}/api/v1/account/balance`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
    fetchBalance();
  }, []);

  const handleLogout = () => {
  
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div>
      <AppBar/>
      <div className="m-8">
        <Balance value={balance}/>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
          Logout
        </button>
        <Users/>
        
      </div>
    </div>
  );
}

export default Dashboard;
