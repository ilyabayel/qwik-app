import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => (
  <nav class="h-10 w-full bg-white shadow-lg">
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
      <ul class="flex h-full items-center gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </nav>
));
