import axios from "axios";

export default class IntroApi {
  static async fetch(): Promise<String> {
    let req = await axios.get("/assets/intro.md");

    return req.data;
  }
}