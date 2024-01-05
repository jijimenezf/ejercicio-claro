import { useEffect, useCallback, useState } from "react";
import { fetchDataFromEndpoint } from "../utils/makeRequest";
import ListChannel from "./ListChannel";
import ProgramInfo from "./ProgramInfo";
import { MultimediaProvider } from "./MultimediaContext";
import type { Entry, Channel } from "../utils/types";
type JSONResponse = {
  entry: Entry;
  response: {
    channels: Channel[];
  };
};

export default function Layout({ inputParams }: { inputParams: Record<string, string> }) {
  const [channels, setChannels] = useState<Channel[]>([]);

  /**
   * Fetch data from the endpoint
   */
  async function fetchEPGData() {
    // Just in case ENV VARS could not properly deployed on a server
    const endpoint =
      import.meta.env.VITE_CLARO_URL ?? "https://mfwkweb-api.clarovideo.net";
    const params = Object.keys(inputParams)
      .map(function (key) {
        return `${key}=${inputParams[key]}`;
      })
      .join("&");

    const dataFromEPG = await fetchDataFromEndpoint<JSONResponse>(
      `${endpoint}/services/epg/channel?${params}`
    );
    if (dataFromEPG.response) {
      setChannels(dataFromEPG.response.channels);
    }
  }

  const memoizedFunc = useCallback(
    () => fetchEPGData(),
    [inputParams.quantity]
  );

  useEffect(() => {
    memoizedFunc();
  }, [inputParams.quantity]);

  return (
    <MultimediaProvider>
      <div className="flex flex-col">
        <ProgramInfo />
        <ListChannel channels={channels} />
      </div>
    </MultimediaProvider>
  );
}
