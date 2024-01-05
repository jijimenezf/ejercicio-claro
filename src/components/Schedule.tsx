import { useContext } from "react";
import { MultimediaContext } from "./MultimediaContext";
import type { EventChannel } from "../utils/types";
import { formatDate } from "../utils/makeRequest";

export default function Schedule({ events }: { events: EventChannel[] }) {
  const sortedEvents = events.sort((ev1, ev2) => {
    const event1Start = formatDate(ev1.date_begin);
    const event2Start = formatDate(ev2.date_begin);

    const schedule1 = event1Start.split(":");
    const schedule2 = event2Start.split(":");

    const firstHour = parseInt(schedule1[0], 10);
    const secondHour = parseInt(schedule2[0], 10);

    return firstHour > secondHour ? 1 : -1;
  });

  return (
    <div className="flex overflow-x-auto space-x-8 ">
      <div className="bg-slate-950 rounded flex flex-row snap-center overflow-x-auto border">
        {sortedEvents.map((singleEvent, index) => (
          <SingleEvent
            key={`${singleEvent.channel_id}-${index}`}
            eventChannel={singleEvent}
          />
        ))}
      </div>
    </div>
  );
}

const SingleEvent = ({ eventChannel }: { eventChannel: EventChannel }) => {
  const [_, setMediaEvent] = useContext(MultimediaContext);

  function updateProgramInfo(eventChannel: EventChannel) {
    // @ts-ignore:next-line
    setMediaEvent(eventChannel);
  }

  return (
    <section
      className="flex-shrink-0 text-white text-xs hover:bg-slate-500 border-r"
      onMouseEnter={() => updateProgramInfo(eventChannel)}
    >
      <div className="p-3">{eventChannel.description ?? "Sin información"}</div>
      <div className="p-3">
        {`${formatDate(eventChannel.date_begin)} - ${formatDate(
          eventChannel.date_end
        )}`}
      </div>
      <div className="text-right pr-3 pb-2">...</div>
    </section>
  );
};
