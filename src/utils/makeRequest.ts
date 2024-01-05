/**
 * Function for handling requests to /api url and for returning the right
 * data type as it is specified in the Promise
 * @param url the endpoint for either user or prompts
 * @param options object containing options for the request
 * @returns the data returned from the database
 */
export async function fetchDataFromEndpoint<TJsonResponse>(url: string,
  options?: RequestInit | undefined): Promise<TJsonResponse> {
    const response = await fetch(url, options);
    const data: TJsonResponse = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(new Error(`No endpoint or data were located at ${url}`));
    }
}

export const formatDate = (scheduleDate: string | undefined) => {
  const isoDate = new Date(scheduleDate ?? "");
  return new Intl.DateTimeFormat("es-MX", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(isoDate);
};

export const formatHour = (duration: string) => {
  const values = duration.split(":");
  return `${parseInt(values[0], 10)} h ${parseInt(values[1], 10)} min`
}
