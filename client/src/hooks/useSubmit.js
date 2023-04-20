import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {auth} from "../../src/firebaseConfig"                 
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const navigate = useNavigate()

  const submit = async (data) => {
    console.log("hello")
    setLoading(true);
    try {
      
    if(data.isSignUp){
      createUserWithEmailAndPassword(auth , data.signemail , data.signpassword)
        .then(()=>{
          console.log('donald')
        })
        .then(()=>{
          setResponse({
            type: 'success',
            message: `SUCCESS! Sign up completed, ${data.firstName}`,
          })
          console.log('mama')
          navigate('/Home')
        })
      }
    
    else{
      signInWithEmailAndPassword(auth , data.signemail, data.signpassword)
      .then(()=>{
        console.log('done');  
      })
      .then(()=>{
        setResponse({
          type: 'success',
          message: `Lets go!!! ${data.firstName}, Logged In!`,
        })
        console.log('mama')
        navigate('/Home')
      })
    }
    console.log('shit')
      
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