import CountdownTimer from "./CountdownTimer";

export default function Timer() {
  function handleTimeFinish() {}
  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer initialTime={100} onTimeFinish={handleTimeFinish} />
    </div>
  );
}
