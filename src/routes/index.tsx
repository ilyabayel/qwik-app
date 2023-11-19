import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Countdown } from "~/components/countdown/countdown";

export default component$(() => {
  return (
    <main class="bg-black">
      <section
        aria-label="hero image"
        class="flex h-screen w-full flex-col items-center justify-center gap-1 bg-gradient-to-r from-sky-500 to-indigo-500"
      >
        <Countdown />
        <p class="text-2xl text-white font-semibold">Before New Year!</p>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Qwik App",
  meta: [
    {
      name: "description",
      content: "Vercel edge test",
    },
  ],
};
