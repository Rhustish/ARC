import React from 'react';
import "./Profile.css"
import {doc , getDoc} from "firebase/firestore"
import UserContext from '../../context/userContext';
import Navbar from "../../components/Navbar/Navbar"
import { db } from '../../firebaseConfig';
import { useState,useEffect } from 'react';

const ProfilePage = () => {
  const {uid,uemail} = React.useContext(UserContext);
  const [userObj, setuserObj] = useState({})
  console.log(uid);
  const reff = doc(db , "users" , uid)
  const doccer = async() =>{
    const obj = await getDoc(reff)
    return obj
  }

  useEffect(() =>{
    const obj = doccer()
  },[doccer])
  console.log(doccer())


  const user =
  {
    name: "Sevithiran Kapoor",
    email: "kapoorsevithiran@bulma.com",
    gender: "Male",
    answers: ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"],
  }
  return (
    <div>
      <Navbar/>
      <div className="profile">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <div className="answers">
          <p>Question 1: உங்கள் குழந்தை புதியவர்களை சந்திக்கும் பொழுது கேட்கும் பிரச்சனை சங்கடத்தை ஏற்படுதிகிரதா? <br/> {user.answers[0]}</p>
          <p>Question 2: உங்கள் குழந்தை குடும்ப உறுப்பினர்களுடன் பேசும் பொழுது கேட்கும் பிரச்சனை விரக்தியை ஏற்படுத்துமா? <br/> {user.answers[1]}</p>
          <p>Question 3: உங்கள் குழந்தைக்கு சக ஊழியர்கள், வாடிக்கையாளர்கள்/ வாடிக்கையாளர்கள் அல்லது காத்திருப்பு பணியாளர்கள் கேட்பதில்/புரிந்து கொள்வதில் சிரமம் உள்ளதா? <br/> {user.answers[2]}</p>
          <p>Question 4: செவித்திறன் பிரச்சனை மூலம் உங்கள் குழந்தை குறிப்பிடத்தக்க அளவில் பின்தங்கியதாக உணர்கிறாரா? <br/> {user.answers[3]}</p>
          <p>Question 5: கேட்கும் பிரச்சனை உங்கள் குழந்தைக்கு நண்பர்கள், உறவினர்கள் அல்லது அண்டை வீட்டார் வருகை தரும் போது சிரமத்தை ஏற்படுத்துமா? <br/> {user.answers[4]}</p>
          <p>Question 6: காது கேளாமை உங்கள் குழந்தைக்கு திரைப்படங்கள் அல்லது திரையரங்கில் காது கேட்கும் பிரச்சனையை ஏற்படுத்துமா? <br/> {user.answers[5]}</p>
          <p>Question 7: காது கேளாமை உங்கள் குழந்தைக்கு குடும்ப உறுப்பினர்களுடன் வாக்குவாதத்தை ஏற்படுத்துமா? <br/> {user.answers[6]}</p>
          <p>Question 8: காது கேளாமை உங்கள் குழந்தைக்கு டிவி அல்லது வானொலியில் கேட்கும் போது சிரமத்தை ஏற்படுத்துமா? <br/> {user.answers[7]}</p>
          <p>Question 9: உங்கள் குழந்தை தனது கேட்கும் வரம்பில் ஏதேனும் சிரமம் இருப்பதாக உணர்கிறார்களா அல்லது அவர்களின் தனிப்பட்ட அல்லது சமூக வாழ்க்கை தடைபடுகிறதா? <br/> {user.answers[8]}</p>
          <p>Question 10: காது கேளாமை உங்கள் குழந்தைக்கு உறவினர்கள் அல்லது நண்பர்களுடன் உணவகத்தில் இருக்கும் பொழுது சிரமத்தை ஏற்படுத்துமா? <br/> {user.answers[9]}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
