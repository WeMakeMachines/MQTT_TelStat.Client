import TelstatAbstractApi from "./TelstatAbstractApi";
import type {
  Response,
  ResponseWithPublisher,
  ResponseWithPublisherList,
} from "./types";

class TelstatPublisherApi extends TelstatAbstractApi {
  url = this.host + "/publisher";

  constructor() {
    super();
  }

  public create(name: string): Promise<ResponseWithPublisher> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .post(this.url + "/create", { name })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public list(): Promise<ResponseWithPublisherList> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .get(this.url + "/list")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public getOne(publisherId: string): Promise<ResponseWithPublisher> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .get(this.url + "/" + publisherId)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public rename({
    publisherId,
    name,
  }: {
    publisherId: string;
    name: string;
  }): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .patch(this.url + "/rename/" + publisherId, { name })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public updateTopic({
    publisherId,
    topicId,
  }: {
    publisherId: string;
    topicId: string | null;
  }): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .patch(this.url + "/topic/" + publisherId, { topicId })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public delete(publisherId: string): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .delete(this.url + "/" + publisherId)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public deleteTelemetry(publisherId: string): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .patch(this.url + "/delete-telemetry/" + publisherId)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export default new TelstatPublisherApi();
