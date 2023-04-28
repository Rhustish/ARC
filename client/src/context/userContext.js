import React from 'react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [uid, setUid] = React.useState(null)
  const [uemail,setUemail] = React.useState(null)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const updateuid = newValue => {
    setUid(newValue)
  }
  const updateEmail = newValue => {
    setUemail(newValue)
  }


  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, uid, uemail , updateEmail , updateuid}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
