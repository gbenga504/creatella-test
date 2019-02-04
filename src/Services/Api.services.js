import * as endpoints from "./Endpoints";

function getQueryParams(params) {
  let queryParams = "",
    keysOfParams = Object.keys(params || {});

  keysOfParams.forEach((key, i) => {
    let appender = i === keysOfParams.length - 1 ? "" : "&";
    queryParams += `${key}=${params[key]}${appender}`;
  });

  let _queryParams = queryParams.length === 0 ? "" : `?${queryParams}`;
  return _queryParams;
}

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
