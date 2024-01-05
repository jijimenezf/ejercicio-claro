import SingleChannel from "./SingleChannel";
import Schedule from "./Schedule";
import type { Channel } from "../utils/types";

export default function ListChannel({ channels }: { channels: Channel[] }) {
  return (
    <div>
      {channels.map((channel) => (
        <div key={channel.id} className="flex flex-row">
          <div className="basis-1/4">
            <SingleChannel key={channel.id} channel={channel} />
          </div>
          <div className="basis-3/4 w-7/12">
            <Schedule events={channel.events} />
          </div>
        </div>
      ))}
    </div>
  );
}
