import { useEffect, useState } from "react";
import { z } from "zod";

const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=16.05&longitude=108.2&current=temperature_2m,weather_code,is_day&timezone=Asia%2FHo_Chi_Minh";

const schema = z.object({
  current: z.object({ temperature_2m: z.number(), weather_code: z.number(), is_day: z.number() }),
});

// WMO weather codes: https://open-meteo.com/en/docs
function emoji(code: number, isDay: boolean): string {
  if (code === 0) return isDay ? "☀️" : "🌙";
  if (code <= 2) return isDay ? "🌤️" : "☁️";
  if (code === 3) return "☁️";
  if (code <= 48) return "🌫️";
  if (code <= 67 || (code >= 80 && code <= 82)) return "🌧️";
  if (code <= 86) return "🌨️";
  return "⛈️";
}

export function DaNangWeather() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(URL, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((json) => {
        const { current } = schema.parse(json);
        setLabel(`${emoji(current.weather_code, current.is_day === 1)} ${Math.round(current.temperature_2m)}°C`);
      })
      .catch(() => setLabel(null)); // weather is decoration; hide it when the API is down
    return () => ctrl.abort();
  }, []);

  if (!label) return null;
  return (
    <a
      href="https://open-meteo.com/en/docs#latitude=16.05&longitude=108.2"
      target="_blank"
      rel="noopener noreferrer"
      title="Current weather in Da Nang"
      className="ml-2 whitespace-nowrap hover:underline"
    >
      {label}
    </a>
  );
}
