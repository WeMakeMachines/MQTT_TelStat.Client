export interface Response {
  success: boolean;
  message?: string;
  data?: object | [];
}

export interface ResponseWithUser extends Response {
  data: { id: string; userName: string; firstName: string; lastName: string };
}
