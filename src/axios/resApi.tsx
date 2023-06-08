import axios, { AxiosPromise } from 'axios';

const instance = axios.create({
  baseURL: 'http://43.218.95.93',
});

export interface LoginResponse {
  data: {
    accessToken: string;
    user: {
      Id: number;
      FullName: string;
      Email: string;
      Password: string;
      Team: string;
      Role: string;
    };
    message: string;
    status: string;
  }
}

export interface User {
  data: {
    users: {
      id: number;
      fullName: string;
      email: string;
      team: string;
      role: string;
      status: string;
    },
    message: string;
    status: string;
  }
}

const api = {
  Login: (email: string, password: string): AxiosPromise<LoginResponse> =>
    instance({
      method: 'POST',
      url: '/login',
      data: {
        email,
        password,
      },
    }),

  GetUser: (token?: string): AxiosPromise<User[]> =>
    instance({
      method: 'GET',
      url: '/users',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default api;
