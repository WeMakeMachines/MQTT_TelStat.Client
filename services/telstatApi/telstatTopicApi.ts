import TelstatAbstractApi from "./TelstatAbstractApi";
import type {
  Response,
  ResponseWithTopic,
  ResponseWithTopicList,
} from "./types";

class TelstatTopicApi extends TelstatAbstractApi {
  url = this.host + "/topic";

  constructor() {
    super();
  }

  public create(name: string): Promise<ResponseWithTopic> {
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

  public list(): Promise<ResponseWithTopicList> {
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

  public getOne(topicId: string): Promise<ResponseWithTopic> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .get(this.url + "/" + topicId)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public rename({
    topicId,
    name,
  }: {
    topicId: string;
    name: string;
  }): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .patch(this.url + "/rename/" + topicId, { name })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  public delete(topicId: string): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .delete(this.url + "/" + topicId)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export default new TelstatTopicApi();
