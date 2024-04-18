import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 
  const onPress = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signup');
      
    } 
    navigate('/Dashboard');
  };

  return (
    <div>
     
    <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-8xl font-bold mb-4 font-custom">PayME</h1>
        <p className="text-xl mb-8 font-custom font-bold">"Empower Your Transactions with PayME: Simplifying Online Payments for Everyone!"</p>
        <button onClick={onPress} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-custom font-semibold transition duration-300 hover:from-pink-700 hover:to-purple-700">Get Started</button>
      </div>
    </div>

    </div>
  )
}

export default Home
