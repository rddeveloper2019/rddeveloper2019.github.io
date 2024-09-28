import { BaseURL } from '../config/sources';
import { Profile, setIsLoading } from '../store/slices/authSlice';
import store from '../store/store';

export type AuthResult = {
  token: string;
  profile: Profile;
};

export type SignUpBody = {
  email: string;
  password: string;
  commandId?: string;
};

export type SignInBody = {
  email: string;
  password: string;
};

export enum ErrorCode {
  ERR_INCORRECT_EMAIL_OR_PASSWORD = 'ERR_INCORRECT_EMAIL_OR_PASSWORD', // Если не корректный email или пароль
  ERR_ACCOUNT_ALREADY_EXIST = 'ERR_ACCOUNT_ALREADY_EXIST', // При регистрации если пользователь уже существует
  ERR_FIELD_REQUIRED = 'ERR_FIELD_REQUIRED', // Обязательное поле. В ошибке будет дополнительное поле fieldName с указанием, какое конкретно поле обязательно
  ERR_INCORRECT_PASSWORD = 'ERR_INCORRECT_PASSWORD', // Некорректный старый пароль при попытке его изменить
  ERR_INVALID_PASSWORD = 'ERR_INVALID_PASSWORD', // Пароль не соответствует регулярному выражению /^[\w-@{}()#$%^&*+=!~]{8,}$/
  ERR_NOT_VALID = 'ERR_NOT_VALID', // Не валидный id сущности
  ERR_AUTH = 'ERR_AUTH', // Токен не передан, либо не прошел авторизацию
  ERR_NO_FILES = 'ERR_NO_FILES', // Ошибка при загрузке файлов
  ERR_NOT_ALLOWED = 'ERR_NOT_ALLOWED', // Нет доступа к данной операции (нельзя редактировать заказ другого пользователя)
  ERR_NOT_FOUND = 'ERR_NOT_FOUND', // Сущность не найдена
  ERR_VALIDATION_ERROR = 'ERR_VALIDATION_ERROR', // Не валидные данные, например, не указано name
  ERR_INVALID_QUERY_PARAMS = 'ERR_INVALID_QUERY_PARAMS', // Все GET запросы могут принимать данные запроса в search params в формате { [key: string]: string // Нужно использовать JSON.stringify() }

  ERR_INTERNAL_SERVER = 'ERR_INTERNAL_SERVER', // Серверная ошибка. Обратитесь ко мне, этой ошибки быть не должно
}

export type ServerErrors = {
  errors: {
    extensions: {
      code: ErrorCode;
    };

    name: string;
    fieldName?: string;
    stack: string;
    message: string;
  }[];
};

export type OperationsFilters = {
  ids?: string[];
  name?: string;
  categoryIds?: string[];
  type?: 'Cost' | 'Profit';
  pagination?: {
    pageSize?: number;
    pageNumber?: number;
  };
  date?: {
    gte?: string; // от - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
    lte?: string; // до - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  };
  createdAt?: {
    gte?: string; // от - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
    lte?: string; // до - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  };
  updatedAt?: {
    gte?: string; // от - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
    lte?: string; // до - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  };
  sorting?: {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'date';
  };
};
export class FetchService {
  static pageNumber = 1;
  static singup = async (body: SignUpBody): Promise<Response> => {
    store.dispatch(setIsLoading());
    return fetch(`${BaseURL}/signup`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
    });
  };

  static singin = async (body: SignInBody): Promise<Response> => {
    store.dispatch(setIsLoading());
    return fetch(`${BaseURL}/signin`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
    });
  };

  static getOperations = async (more = false): Promise<Response> => {
    const count = more ? ++FetchService.pageNumber : 1;
    // store.dispatch(setIsLoading());
    return fetch(
      `${BaseURL}/operations?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: 10,
          pageNumber: count,
        }),
        sorting: JSON.stringify({ type: 'ASC', field: 'updatedAt' }),
      }).toString()}`
    );
  };
}