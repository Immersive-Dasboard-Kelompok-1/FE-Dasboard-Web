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
    FullName: string;
    NickName: string;
    ClassID: number;
    Status: string;
    Category: string;
    Gender: string;
    Graduate: string;
    Mayor: string;
    Phone: string;
    Telegram: string;
    Discord: string;
    Institusi: string;
    Email: string;
    EmergencyName: string;
    EmergencyPhone: string;
    EmergencyStatus: string;
  }
}
export interface Mentee {
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

export interface DeleteUser{

}
export interface DeleteMantee{

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
    
  GetMentee: (token?: string): AxiosPromise<Mentee[]> =>
    instance({
      method: 'GET',
      url: '/mentees',
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
    status: string,): AxiosPromise<AddUser> =>
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
    }),

    DeleteUser: (id: string, token?: string): AxiosPromise<DeleteUser> =>
    instance({
      method: 'DELETE',
      url: `/users/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
 
    DeleteMentee: (id: string, token?: string): AxiosPromise<DeleteMantee> =>
    instance({
      method: 'DELETE',
      url: `/mentees/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
 
};

export default api;
