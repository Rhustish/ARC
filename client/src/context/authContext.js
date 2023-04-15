import {createContext , useState} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [value, setValue] = useState(false)

  const updateValue = newValue => {
    setValue(newValue)
  }

  return (
    <AuthContext.Provider value={{ value, updateValue }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
