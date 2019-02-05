import * as endpoints from "./Endpoints";
import { getQueryParams } from "../utils";

const API = ({ config, params }) => {
  let _config = config || {},
    header = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      ..._config
    };

  return fetch(
    `${endpoints.api.baseURL}${endpoints.api.products}${getQueryParams(
      params
    )}`,
    header
  ).then(response => response.json());
};

export default API;
