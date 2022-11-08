import * as Keychain from 'react-native-keychain';

class UserCreds {
  async set(username: string, token: string) {
    await Keychain.setGenericPassword(username, token);
  }
  async get() {
    const res = Keychain.getGenericPassword();
    return res;
  }
  async reset() {
    await Keychain.resetGenericPassword();
  }
}

const userCredentials = new UserCreds();

Object.freeze(userCredentials);

export default userCredentials;
