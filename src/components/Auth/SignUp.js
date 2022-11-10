import { Auth } from "aws-amplify";
import { useEffect } from "react";

const SignUp = () => {
  const username = "karwan.ismo@gmail.com";
  const password = "tesY@1234";
  const email = "karwan.ismo@gmail.com";
  const family_name = "kkk";
  const name ="Karwan"
  const handleAuth = async () => {
    try {
      const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
              email, 
              family_name,  
              name,       // optional
              // phone_number,   // optional - E.164 number convention
              // other custom attributes 
          },
          autoSignIn: { // optional - enables auto sign in after user is confirmed
              enabled: true,
          }
      });
      console.log(user);
  } catch (error) {
      console.log('error signing up:', error);
  }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <button onClick={handleAuth}>click</button>
    </div>
  );
};

export default SignUp;
