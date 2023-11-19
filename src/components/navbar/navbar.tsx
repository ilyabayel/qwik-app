import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => (
  <header class="fixed left-0 right-0 top-0 h-10 w-full bg-white/50 text-black shadow-lg backdrop-blur dark:bg-black/50 dark:text-white">
    <div class="container mx-auto flex h-full items-center justify-between">
      <div class="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
          alt="logo"
          class="h-8 w-8"
          width="1200"
          height="1200"
        />
        <h1 class="ml-2 text-xl font-bold">Colorful</h1>
      </div>
      <nav class="flex h-full items-center gap-3">
        <Link href="/" class="underline">
          Home
        </Link>
        <Link href="/about" class="underline">
          About
        </Link>
        <Link href="/contact-us" class="underline">
          Contact us
        </Link>
        <Link href="/blog" class="underline">
          Blog
        </Link>
      </nav>
    </div>
  </header>
));
