import {useState,useContext} from "react";
import {useNavigate} from 'react-router-dom'
import {auth} from "../../src/firebaseConfig"                 
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import UserContext from "../context/userContext";



const useSubmit = () => {
  const {updateEmail , updateuid} = useContext(UserContext);

  const postLoginFunc = (email , uid)=>{
    updateEmail(email)
    updateuid(uid)
  }

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const navigate = useNavigate()

  const submit = async (data) => {
    console.log("data")
    setLoading(true);
    try {
      
    if(data.isSignUp){
      createUserWithEmailAndPassword(auth , data.signemail , data.signpassword)
        .then((e)=>{
          postLoginFunc(e.user.email , e.user.uid)
          navigate('/Home')
        })
      }
    
    else{
      signInWithEmailAndPassword(auth , data.signemail, data.signpassword)
      .then((e)=>{
        postLoginFunc(e.user.email , e.user.uid) 
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

/* sample signup Object:{Name: ""
          gender: ""
          isSignUp: true
          q1: "0"
          q2: "0"
          q3: ""
          q4: ""
          q5: ""
          q6: ""
          q7: ""
          q8: ""
          q9: ""
          q10:""
          signemail: ""
          signpassword: "" }*/
export default useSubmit;