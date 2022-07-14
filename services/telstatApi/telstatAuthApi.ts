import TelstatAbstractApi from "./TelstatAbstractApi";
import type { Response, ResponseWithUser } from "./types";

export interface LoginCredentials {
  userName: string;
  password: string;
}

class TelstatAuthApi extends TelstatAbstractApi {
  url = this.host + "/auth";

  constructor() {
    super();
  }

  public login(loginCredentials: LoginCredentials): Promise<ResponseWithUser> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .post(this.url + "/login", loginCredentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public logout(): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .get(this.url + "/logout")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export default new TelstatAuthApi();
