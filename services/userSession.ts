import EncryptedStorage from 'react-native-encrypted-storage';

class UserSession {
  async store(token: string) {
    try {
      await EncryptedStorage.setItem('access_token', token);
    } catch (error) {}
  }
  async retrieve() {
    try {
      const session = await EncryptedStorage.getItem('access_token');
      if (session) {
        return session;
      }
    } catch (error) {}
  }
  async remove() {
    try {
      await EncryptedStorage.removeItem('access_token');
    } catch (error) {}
  }
}

const userSession = new UserSession();

Object.freeze(userSession);

export default userSession;
