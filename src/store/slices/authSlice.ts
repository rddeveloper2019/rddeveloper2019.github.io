import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ADMIN_TOKEN, TokenService, USER_TOKEN } from '../../model/utils/tokenService';

const usersDb: { [key: string]: UserProfile } = {
  admin: {
    id: '1_',
    root: 'admin',
    username: 'admin',
    email: 'admin@test.f',
  },
  user: {
    id: '2_',
    root: 'user',
    username: 'user',
    email: 'user@test.f',
  },
};

type UserProfile = {
  id: string;
  username: string;
  email: string;
  root: 'admin' | 'user';
};

type AuthStateType = {
  isAuth: boolean;
  isAdmin: boolean;
  profile: UserProfile | null;
};

const initialState: AuthStateType = {
  isAuth: TokenService.checkToken(),
  isAdmin: TokenService.checkIsAdmin(),
  profile: (TokenService.checkIsAdmin() && usersDb.admin) || (TokenService.checkIsUser() && usersDb.user) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>): void => {
      const username = action.payload;
      TokenService.clearToken();

      if (username === 'admin') {
        TokenService.setToken(ADMIN_TOKEN);
        state.profile = usersDb.admin;
      } else {
        TokenService.setToken(USER_TOKEN);
        state.profile = usersDb.user;
      }
      state.isAuth = true;
      state.isAdmin = TokenService.checkIsAdmin();
    },
    logout: (state): void => {
      TokenService.clearToken();
      state.isAuth = false;
      state.isAdmin = TokenService.checkIsAdmin();
      state.profile = null;
    },
    saveProfile: (state, action: PayloadAction<Partial<UserProfile>>): void => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { login, logout, saveProfile } = authSlice.actions;
export const authReducer = authSlice.reducer;
