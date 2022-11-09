import {useState, useEffect} from 'react';
import userSession from '../services/userSession';

const getToken = async () => {
  try {
    const token = await userSession.retrieve();
    return token;
  } catch (e) {
    return null;
  }
};

const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (token !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return isAuth;
};

export default useAuth;
