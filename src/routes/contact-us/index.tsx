import { component$ } from "@builder.io/qwik";
import { Heading } from "~/components/heading/heading";

export default component$(() => (
  <main class="container mx-auto min-h-screen pt-[60px]">
    <Heading level={1}>Contact us</Heading>
    <br />
    <p class="text-white">Here will be our contacts</p>
  </main>
));
