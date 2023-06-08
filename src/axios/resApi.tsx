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
    id: number;
    fullName: string;
    email: string;
    team: string;
    role: string;
    status: string;
  }
}


export interface AddUser {

  fullname: string;
  email: string;
  password: string;
  team: string;
  role: string;
  status: string;

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

    AddUser: (
      token: string, 
      fullname: string, 
      email: string, 
      password: string, 
      team: string, 
      role: string, 
      status: string): AxiosPromise<AddUser> =>
    instance({
      method: 'POST',
      url: '/users',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        fullname,
        email,
        password,
        team,
        role,
        status,
      },
    })
};

export default api;
