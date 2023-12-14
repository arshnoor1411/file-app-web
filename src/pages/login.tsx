import LoginForm from "@/components/Login";
import graphQlService from "@/graphql/graphqlService";
import { useSignInMutation } from "@/services/api/fileServer";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInMutation = useSignInMutation(graphQlService(), {
    onSuccess() {
      console.log("Successfully Signed In");
    },
    onError(error: any) {
      console.log(error);
    },
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInMutation.mutate({ email, password });
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    ></LoginForm>
  );
};

export default Login;
