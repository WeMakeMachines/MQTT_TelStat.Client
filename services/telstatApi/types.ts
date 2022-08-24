import type { Publisher, Topic, User } from "./models";

export interface Response {
  success: boolean;
  message?: string;
  data?: object | [];
}

export interface ResponseWithPublisher extends Response {
  data: Publisher;
}

export interface ResponseWithPublisherList extends Response {
  data: Publisher[];
}

export interface ResponseWithTopic extends Response {
  data: Topic;
}

export interface ResponseWithTopicList extends Response {
  data: Topic[];
}

export interface ResponseWithUser extends Response {
  data: User;
}
