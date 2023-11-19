import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Heading } from "~/components/heading/heading";

const blogs = [1, 2, 3, 4, 5, 6, 7, 8];

export default component$(() => (
  <main class="container mx-auto min-h-screen pt-20">
    <Heading level={1}>Blog</Heading>
    <br />
    {blogs.map((id) => (
      <>
        <Link href={`/blog/posts/${id}`} key={id}>
          <article class="flex h-[200px] w-full overflow-hidden rounded bg-white/10">
            <div class="h-full w-96 bg-[url('https://picsum.photos/seed/1/400/400')] bg-cover bg-no-repeat" />
            <div class="p-4">
              <Heading level={2}>Blog post #{id}</Heading>
              <p class="mt-4 dark:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                id tempora consectetur adipisci eos officiis ex nihil iste neque
                quidem, quisquam harum vel! Aut, perspiciatis totam. Temporibus
                neque culpa sint?
              </p>
            </div>
          </article>
        </Link>
        <br />
      </>
    ))}
  </main>
));
