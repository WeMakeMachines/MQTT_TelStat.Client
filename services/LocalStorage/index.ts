export default class LocalStorage {
  public static get(key: string) {
    const data = window.localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(data);
  }

  public static store(key: string, data: object) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
