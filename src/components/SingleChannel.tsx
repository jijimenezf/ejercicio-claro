import type { Channel } from "../utils/types";

export default function SingleChannel({ channel }: { channel: Channel }) {
  return (
    <div className="bg-slate-950 m-1 pl-1 pt-2 rounded min-w-56 min-h-16">
      <div className="flex flex-row justify-around items-center">
        <div className="text-white">{channel.id}</div>
        <div>
          <img
            src={channel.image}
            alt="channel info"
            width={120}
            height={120}
          ></img>
        </div>
      </div>
    </div>
  );
}
