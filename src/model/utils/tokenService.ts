const key = 'token';
export const ADMIN_TOKEN = 'admin_token';
export const USER_TOKEN = 'user_token';
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
    return localStorage.getItem(key) === ADMIN_TOKEN || localStorage.getItem(key) === USER_TOKEN;
  };
  static checkIsAdmin = () => {
    const token = TokenService.getToken();
    return !!token && token === ADMIN_TOKEN;
  };

  static checkIsUser = () => {
    const token = TokenService.getToken();
    return !!token && token === USER_TOKEN;
  };
}
