import ImgImage from "~/media/image.jpg?jsx";
import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Heading } from "~/components/heading/heading";

export default component$(() => {
  const id = useLocation().params.id;

  return (
    <main class="container mx-auto min-h-screen px-[10%] pt-32">
      <article>
        <h1 class="font-sans text-4xl font-bold text-black dark:text-white">
          Blog Post #{id}
        </h1>
        <div class="h-8"></div>
        <p class="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          mollitia exercitationem libero odio soluta doloribus a, quos nisi ea
          facilis, itaque praesentium, eius quia! Magnam accusamus ullam eos
          adipisci blanditiis.
        </p>
        <div class="h-6"></div>
        <Heading level={3}>Subtitle 1</Heading>
        <div class="h-3"></div>
        <p class="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          mollitia exercitationem libero odio soluta doloribus a, quos nisi ea
          facilis, itaque praesentium, eius quia! Magnam accusamus ullam eos
          adipisci blanditiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda mollitia exercitationem libero odio soluta
          doloribus a, quos nisi ea facilis, itaque praesentium, eius quia!
          Magnam accusamus ullam eos adipisci blanditiis.
        </p>
        <div class="h-6"></div>
        <Heading level={3}>Subtitle 2</Heading>
        <div class="h-3"></div>
        <p class="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          mollitia exercitationem libero odio soluta doloribus a, quos nisi ea
          facilis, itaque praesentium, eius quia! Magnam accusamus ullam eos
          adipisci blanditiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda mollitia exercitationem libero odio soluta
          doloribus a, quos nisi ea facilis, itaque praesentium, eius quia!
          Magnam accusamus ullam eos adipisci blanditiis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Assumenda mollitia exercitationem
          libero odio soluta doloribus a, quos nisi ea facilis, itaque
          praesentium, eius quia! Magnam accusamus ullam eos adipisci
          blanditiis.
        </p>
        <ImgImage alt="forest" class="mb-3 mt-6 w-full rounded" />
        <p class="text-center dark:text-white">
          Photo from Unsplash. Ricardo Gomez Angel
        </p>
        <div class="h-6"></div>
        <Heading level={3}>Subtitle 3</Heading>
        <div class="h-3"></div>
        <p class="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          mollitia exercitationem libero odio soluta doloribus a, quos nisi ea
          facilis, itaque praesentium, eius quia! Magnam accusamus ullam eos
          adipisci blanditiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda mollitia exercitationem libero odio soluta
          doloribus a, quos nisi ea facilis, itaque praesentium, eius quia!
          Magnam accusamus ullam eos adipisci blanditiis.
        </p>
        <div class="h-6"></div>
        <Heading level={3}>Subtitle 4</Heading>
        <div class="h-3"></div>
        <p class="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          mollitia exercitationem libero odio soluta doloribus a, quos nisi ea
          facilis, itaque praesentium, eius quia! Magnam accusamus ullam eos
          adipisci blanditiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda mollitia exercitationem libero odio soluta
          doloribus a, quos nisi ea facilis, itaque praesentium, eius quia!
          Magnam accusamus ullam eos adipisci blanditiis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Assumenda mollitia exercitationem
          libero odio soluta doloribus a, quos nisi ea facilis, itaque
          praesentium, eius quia! Magnam accusamus ullam eos adipisci
          blanditiis.
        </p>
        <div class="h-6"></div>
        <Heading level={3}>Conclusion</Heading>
        <div class="h-3"></div>
        <p class="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          mollitia exercitationem libero odio soluta doloribus a, quos nisi ea
          facilis, itaque praesentium, eius quia! Magnam accusamus ullam eos
          adipisci blanditiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda mollitia exercitationem libero odio soluta
          doloribus a, quos nisi ea facilis, itaque praesentium, eius quia!
          Magnam accusamus ullam eos adipisci blanditiis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Assumenda mollitia exercitationem
          libero odio soluta doloribus a, quos nisi ea facilis, itaque
          praesentium, eius quia! Magnam accusamus ullam eos adipisci
          blanditiis.
        </p>
      </article>
      <div class="h-20"></div>
    </main>
  );
});
