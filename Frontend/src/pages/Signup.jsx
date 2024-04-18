import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Head from "../components/Head";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { baseURL } from "../../URLs";
const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Head label={"Sign Up Now"}/>
          <SubHeading description ={"Enter your information to create an account"}/>
          <InputBox onChange={e =>{
            setFirstName(e.target.value)
          }} placeholder="John" label={"First Name"} />

          <InputBox onChange={e=>{
            setlastName(e.target.value)
          }} placeholder="John" label={"Last Name"} />

          <InputBox onChange={e=>{
            setUserName(e.target.value)
          }} placeholder="chetankesare890@gmail.com" label={"Email"} />

          <InputBox onChange={e=>{
            setPassword(e.target.value)
          }} placeholder="123" label={"Password"} />

          <div className="pt-4">
            <Button onPress={async ()=>{
              const response = await axios.post(`${baseURL}/api/v1/user/signup`,
              {
                username,
                firstName,
                lastName,
                password
              }
              );
              localStorage.setItem("token", response.data.token);
              const user = await localStorage.getItem("token");
              if (user) {
                navigate("/dashboard");
              }
              else {
                navigate("/signin");
              }
              
            }} label={"Sign Up"}/>
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

export default Signup
