import axios from "axios";
import { baeUrl } from "./constanse/const";

const instance = axios.create({
  baseURL: baeUrl,
});

export default instance;
