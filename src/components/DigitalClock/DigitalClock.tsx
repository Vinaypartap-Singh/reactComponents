import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    });

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <h1>Digital Clock</h1>

      <span>
        {time.getHours().toLocaleString().padStart(2, "0").toString()}:
      </span>
      <span>
        {time.getMinutes().toLocaleString().padStart(2, "0").toString()}:
      </span>
      <span>
        {time.getSeconds().toLocaleString().padStart(2, "0").toString()}
      </span>

      <div className="date">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}
