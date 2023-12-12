import SignupForm from "@/components/SignUp";
import graphQlService from "@/graphql/graphqlService";
import { useCreateUserMutation } from "@/services/api/fileServer";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const signupMutation = useCreateUserMutation(graphQlService(),{

  //   })
  const handleLogin = () => {
    // Add your authentication logic here
    console.log(`Logging in with username: ${name} and password: ${password}`);
  };

  return <SignupForm></SignupForm>;
};

export default SignUp;
