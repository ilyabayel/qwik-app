import { Slot, component$ } from "@builder.io/qwik";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  shadow?: boolean;
};

export const Heading = component$(({ level, shadow }: HeadingProps) => {
  if (level === 1)
    return (
      <h1
        class={[
          "font-sans text-4xl font-bold text-black dark:text-white",
          shadow && "drop-shadow",
        ]}
      >
        <Slot />
      </h1>
    );

  if (level === 2)
    return (
      <h2
        class={[
          "font-sans text-3xl font-semibold text-black dark:text-white",
          shadow && "drop-shadow",
        ]}
      >
        <Slot />
      </h2>
    );

  if (level === 3)
    return (
      <h3
        class={[
          "font-sans text-2xl font-semibold text-black dark:text-white",
          shadow && "drop-shadow",
        ]}
      >
        <Slot />
      </h3>
    );

  if (level === 4)
    return (
      <h4
        class={[
          "font-sans text-xl font-semibold text-black dark:text-white",
          shadow && "drop-shadow",
        ]}
      >
        <Slot />
      </h4>
    );

  if (level === 5)
    return (
      <h5
        class={[
          "text-md font-sans font-semibold text-black dark:text-white",
          shadow && "drop-shadow",
        ]}
      >
        <Slot />
      </h5>
    );

  return (
    <h6
      class={[
        "font-sans text-sm font-bold text-black dark:text-white",
        shadow && "drop-shadow",
      ]}
    >
      <Slot />
    </h6>
  );
});
