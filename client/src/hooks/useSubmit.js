import {useState} from "react";
import {auth} from "../../src/firebaseConfig"                 
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    console.log("hello")
    console.log("hello")
    setLoading(true);
    try {
      
    if(!data.isSignUp){
      createUserWithEmailAndPassword(auth , data.signemail , data.signpassword)
        .then(()=>{
          console.log('donald')
        })
      }
    
    else{
      signInWithEmailAndPassword(auth , data.logemail , data.logpassword)
      .then(()=>{
        console.log('duck');
        //set user
      })
    }
    console.log('shit')
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
