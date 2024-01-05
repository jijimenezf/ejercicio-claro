import { useContext } from "react";
import { MultimediaContext } from "./MultimediaContext";
import type { MediaContextType } from "../utils/types";
import { formatDate, formatHour } from "../utils/makeRequest";

export default function ProgramInfo() {
  // @ts-ignore:next-line
  const [mediaEvent, _] = useContext(MultimediaContext) as MediaContextType;

  /**
   * As an enhancement it would be fine if adding bg-[url('')] in classname with some of thes values
   * image_base_horizontal, image_base_square, image_base_vertical
   */
  return (
    <div className="sticky top-0 min-h-72 bg-slate-800 text-white">
      <div className="flex flex-row">
        <div className="flex flex-col">
          {mediaEvent && (
            <>
              <div className="p-3">
                <h4 className="text-lg">
                  Programa del canal {mediaEvent?.channel_id}
                </h4>
              </div>
              <div className="p-3">
                <section>
                  <span className="block">{`Descripción - ${
                    mediaEvent?.description ?? "Sin información"
                  }`}</span>
                  <span className="block">{`Duración ${formatHour(
                    mediaEvent.duration
                  )}`}</span>
                </section>
              </div>

              <div className="p-3">
                {`De ${formatDate(mediaEvent.date_begin)} hrs. a ${formatDate(
                  mediaEvent.date_end
                )} hrs.`}
              </div>
            </>
          )}
        </div>
        {mediaEvent && (
          <div>
            <div className="p-3">
              <p>{`Comentarios - ${
                mediaEvent?.description ?? "Sin información"
              }`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
