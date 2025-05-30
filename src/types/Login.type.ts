// export interface LoginRequest {
//     email: string;
//     password: string;
//   }

//   export interface LoginResponse {
//     accessToken: string;
//     refreshToken: string;
//   }
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token?: string;
  refresh_token?: string;
}
export interface OPTRequest {
  phone_number: string;
}
