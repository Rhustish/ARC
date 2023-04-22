import React from 'react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [uid, setUid] = React.useState(null)
  const [uemail,setUemail] = React.useState(null)


  const updateuid = newValue => {
    setUid(newValue)
  }
  const updateEmail = newValue => {
    setUemail(newValue)
  }

  const userMemo = React.useMemo(()=>({uid , setUid , uemail , setUemail}) , [uid , uemail])

  return (
    <UserContext.Provider value={{userMemo , updateEmail , updateuid}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
