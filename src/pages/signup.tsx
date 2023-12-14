import SignupForm from "@/components/SignUp";
import graphQlService from "@/graphql/graphqlService";
import { useCreateUserMutation } from "@/services/api/fileServer";
import { MouseEvent, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupMutation = useCreateUserMutation(graphQlService(), {
    onSuccess() {
      console.log("Successfully Signed Up");
    },
    onError(error: any) {
      console.log(error);
    },
  });

  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Here", name, email, password);
    signupMutation.mutate({ createUserInput: { name, email, password } });
  };

  return (
    <SignupForm
      name={name}
      email={email}
      password={password}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    ></SignupForm>
  );
};

export default SignUp;
