export function apiUrlBuilder(endPoint: string, version?: string) {
  let apiUrl = "";
  let host = (process.env.API_HOST as string) || "localhost:3000";
  let formattedEndpoint = "";

  if (host.endsWith("/")) host = host.slice(0, -1);

  if (endPoint.startsWith("/")) {
    formattedEndpoint = endPoint.substring(1);
  } else {
    formattedEndpoint = endPoint;
  }

  if (version) {
    apiUrl = `${host}/api/${version}/${formattedEndpoint}`;
  } else {
    apiUrl = `${host}/api/${formattedEndpoint}`;
  }

  return apiUrl;
}
