const key = 'authorize';
export class TokenService {
  static setToken = (token: string) => {
    localStorage.setItem(key, token);
  };
  static clearToken = () => {
    localStorage.removeItem(key);
  };
  static getToken = () => {
    return localStorage.getItem(key);
  };

  static checkToken = () => {
    return !!localStorage.getItem(key);
  };
}
