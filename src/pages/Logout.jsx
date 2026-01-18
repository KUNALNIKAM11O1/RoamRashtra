import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setUser }) => {

  const nav = useNavigate()

  useEffect(() => {
    localStorage.removeItem("user")
    setUser(null)
    nav('/loginpage')
  }, [nav, setUser])

  return null
}

export default Logout
