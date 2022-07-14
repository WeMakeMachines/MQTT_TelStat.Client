import TelstatAbstractApi from "./TelstatAbstractApi";
import type { Response, ResponseWithUser } from "./types";

class TelstatUserApi extends TelstatAbstractApi {
  url = this.host + "/user";

  constructor() {
    super();
  }

  public getUser(): Promise<ResponseWithUser> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .get(this.url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public updateUser(): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .patch(this.url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export default new TelstatUserApi();
