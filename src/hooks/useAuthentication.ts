import { useEffect, useState } from 'react';
import { AuthResult, FetchService, ServerErrors, SignInBody, SignUpBody } from '../model/FetchService';
import { useAuthSelector } from '../store/selectors';
import { useAppDispatch } from '../store/store';
import { setAuthError, signup } from '../store/slices/authSlice';

export const useAuthentication = () => {
  const { authError } = useAuthSelector();
  const [errorMessage, setErrorMesage] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    setErrorMesage(authError);
  }, [authError]);

  const register = async (body: SignUpBody): Promise<void> => {
    try {
      const response = await FetchService.singup(body);

      if (!response?.ok) {
        throw await response.json();
      }

      const { token, profile } = (await response.json()) as AuthResult;
      dispatch(signup({ token, profile }));
    } catch (error: unknown) {
      dispatch(setAuthError(error);
    }
  };

  const login = async (body: SignInBody): Promise<void> => {
    try {
      const response = await FetchService.singin(body);

      if (!response?.ok) {
        throw await response.json();
      }

      const { token, profile } = (await response.json()) as AuthResult;
      dispatch(signup({ token, profile }));
    } catch (error: unknown) {
      dispatch(setAuthError({ error }));
    }
  };

  return { register, login, errorMessage };
};
