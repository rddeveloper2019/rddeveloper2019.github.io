import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TokenService } from '../../model/TokenService';
import { ServerErrors } from '../../model/FetchService';
import { SignUp } from '../../store/thunks/authThunk';

export type Profile = {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
  commandId: string;
};

type AuthStateType = {
  isAuth: boolean;
  isAdmin: boolean;
  profile: Profile | null;
  authError?: string;
};

const initialState: AuthStateType = {
  isAuth: TokenService.checkToken(),
  isAdmin: true,
  profile: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<{ token: string }>): void => {
      TokenService.setToken(action.payload.token);
      state.isAuth = true;
    },
    signout: (state): void => {
      TokenService.clearToken();
      state.isAuth = false;
      state.profile = null;
      TokenService.clearToken();
    },
    signup: (state, { payload }: PayloadAction<{ profile: Profile; token: string }>): void => {
      TokenService.setToken(payload.token);
      state.isAuth = true;
      state.profile = payload.profile;
    },
    setAuthError: (state, { payload }: PayloadAction<{ error: unknown }>): void => {
      const { errors = [] } = payload.error as ServerErrors;
      const message = errors?.[0]?.message || '❌ Неизвестная ошибка';
      state.isAuth = false;
      state.profile = null;
      state.authError = message;
    },
    clearAuthError: (state): void => {
      state.authError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignUp.fulfilled, (state, { payload }) => {
      TokenService.setToken(payload.token);
      state.isAuth = true;
      state.profile = payload.profile;
    });
    builder.addCase(SignUp.rejected, (state, { payload }) => {
      const { errors = [] } = payload as ServerErrors;
      const message = errors?.[0]?.message || '❌ Неизвестная ошибка';
      state.isAuth = false;
      state.profile = null;
      state.authError = message;
    });
  },
});

export const { signin, signout, signup, setAuthError, clearAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;
