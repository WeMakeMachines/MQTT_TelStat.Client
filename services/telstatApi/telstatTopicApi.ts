import TelstatAbstractApi from "./TelstatAbstractApi";
import type { Response } from "./types";
import type { Topic } from "./models";

interface ResponseWithTopic extends Response {
  data: Topic;
}

interface ResponseWithTopicList extends Response {
  data: Topic[];
}

class TelstatTopicApi extends TelstatAbstractApi {
  url = this.host + "/topic";

  constructor() {
    super();
  }

  public create(name: string): Promise<Response> {
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

  public rename(
    topicId: string,
    { name }: { name: string }
  ): Promise<Response> {
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

  public addPublisher(
    topicId: string,
    { publisherId }: { publisherId: string }
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      this.axiosWithCredentials
        .patch(this.url + "/rename/" + topicId, { publisherId })
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
