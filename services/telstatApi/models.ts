export interface Publisher {
  _id: string;
  nanoId: string;
  owner: {
    _id: string;
    userName: string;
  };
  lastPublishDate: number | null;
  name: string;
  telemetry: object[];
}

export interface Topic {
  _id: string;
  name: string;
  publishers: string[];
}
