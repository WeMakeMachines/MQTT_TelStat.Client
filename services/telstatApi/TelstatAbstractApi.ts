import axios from "axios";

export default abstract class TelstatAbstractApi {
  axiosWithCredentials = axios.create({
    withCredentials: true,
  });

  host = import.meta.env.VITE_API_HOST;
}
