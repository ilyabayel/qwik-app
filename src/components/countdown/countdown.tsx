import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

const releaseDate = new Date("2024-01-01T00:00:00.000Z");

function timeDifference(date1: Date, date2: Date) {
  let difference = date1.getTime() - date2.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  difference -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  difference -= hours * (1000 * 60 * 60);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  difference -= minutes * (1000 * 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function formatTime(time: number) {
  return time < 10 ? `0${time}` : time;
}

export const Countdown = component$(() => {
  const timeDiff = useSignal(timeDifference(releaseDate, new Date()));
  useVisibleTask$(() => {
    const interval = setInterval(() => {
      timeDiff.value = timeDifference(releaseDate, new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div class="text-4xl font-bold text-white drop-shadow">
      {timeDiff.value.days} days | {formatTime(timeDiff.value.hours)}:
      {formatTime(timeDiff.value.minutes)}:{formatTime(timeDiff.value.seconds)}
    </div>
  );
});
