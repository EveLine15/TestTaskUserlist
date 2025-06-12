"use client";

import { useState } from "react";

import { CardTitle } from "@/components/ui/card";

import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export const DetailedInfoSection = ({
  title,
  data,
}: {
  title: string;
  data: Record<string, string>;
}) => {
  const [sectionOpen, setSectionOpen] = useState(false);
  const isTouch = useIsTouchDevice();

  return (
    <div className="group" onClick={() => setSectionOpen(!sectionOpen)}>
      <CardTitle className="text-xl font-semibold text-slate-700">
        {title}
      </CardTitle>
      {((sectionOpen && isTouch) ||
        (!sectionOpen && !isTouch)) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {Object.entries(data).map(([key, value]) => (
              <div
                key={key}
                className={`overflow-hidden transition-all duration-600 ${(!isTouch) ? "max-h-0 group-hover:max-h-32": ""}`}
              >
                <p className="text-sm text-slate-500 capitalize">{key}</p>
                {key === "Website" ? (
                  <a
                    href={`https://${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-purple-800 hover:underline transition"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-base font-medium text-slate-700">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
    </div>
  );
};
