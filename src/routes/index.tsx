import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <h1>Main page</h1>;
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
