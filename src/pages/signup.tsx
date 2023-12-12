import SignupForm from "@/components/SignUp";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
    console.log(`Logging in with username: ${name} and password: ${password}`);
  };

  return <SignupForm></SignupForm>;
};

export default SignUp;
