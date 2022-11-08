import EncryptedStorage from 'react-native-encrypted-storage';

class UserSession {
  async store(username: string, token: string) {
    try {
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({
          token,
          username,
        }),
      );
    } catch (error) {}
  }
  async retrieve() {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      if (session) {
        return JSON.parse(session);
      }
    } catch (error) {}
  }
  async remove() {
    try {
      await EncryptedStorage.removeItem('user_session');
    } catch (error) {}
  }
}

const userSession = new UserSession();

Object.freeze(userSession);

export default userSession;
