import LoginForm from "@/components/Login";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
    console.log(`Logging in with username: ${name} and password: ${password}`);
  };

  return <LoginForm></LoginForm>;
};

export default Login;
