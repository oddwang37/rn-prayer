import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import userSession from '../services/userSession';
import {setIsAuth as setIsAuthRedux} from '../store/ducks/auth';

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
