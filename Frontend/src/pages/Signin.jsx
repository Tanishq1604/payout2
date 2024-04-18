import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Head from "../components/Head";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { baseURL } from "../../URLs";

const Signin = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Head label={"Sign In Now"} />
          <SubHeading description={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => setUserName(e.target.value)}
            placeholder="chetankesare890@gmail.com"
            label="Email" />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123"
            label="Password" />
          <div className="pt-4">
            <Button onPress={async () => {
              const response = await axios.post(`${baseURL}/api/v1/user/signin`, {
                username,
                password
              });
              localStorage.setItem("token", response.data.token);
              const user = await localStorage.getItem("token");
              if (user) {
                navigate("/dashboard");
              }
              else {
                navigate("/signin");
              }
              
            }} label="Sign In" />
          </div>
          <BottomWarning label="Don't have an account?" buttonText="Sign Up" to="/signup" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
