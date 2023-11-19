import { component$ } from "@builder.io/qwik";
import { Heading } from "~/components/heading/heading";

export default component$(() => (
  <main class="container mx-auto min-h-screen pt-20">
    <Heading level={1}>About</Heading>
  </main>
));
