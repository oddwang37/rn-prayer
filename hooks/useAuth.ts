import {useState, useEffect} from 'react';
import userSession from '../services/userSession';

const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(false);
  const checkToken = async () => {
    try {
      const token = await userSession.retrieve();
      console.log(token);
      if (token !== undefined) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return isAuth;
};

export default useAuth;
