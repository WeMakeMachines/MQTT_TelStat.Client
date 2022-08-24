export interface Publisher {
  _id: string;
  nanoId: string;
  owner: {
    _id: string;
    userName: string;
    firstName?: string;
    lastName?: string;
  };
  lastPublishDate: number | null;
  name: string;
  topic?: {
    _id: string | null;
    name: string | null;
  };
  telemetry: object[];
}

export interface Topic {
  _id: string;
  name: string;
}

export interface User {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
}
