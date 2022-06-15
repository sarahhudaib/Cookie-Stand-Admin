import Admin from '../components/Admin'

import LoginForm from '../components/LoginForm'

import {useState, useEffect} from 'react'
import axios from 'axios';

function Home() {

  const [token, setToken] = useState(null);
  const userData = {
    username: 'admin',
    password: 'admin'
  }
  return(
    <>
    <LoginForm/>
      <Admin/>
    </>
  )
}

export default Home