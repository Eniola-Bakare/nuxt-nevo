<script setup>
const loading = ref(false);
</script>

<template>
  <div class="flex flex-col items-center gap-7 h-full overflow-clip">
    <h1
      class="hero-text uppercase text-[#000] text-center text-[73px] font-custom pt-24"
    >
      Innovating Solutions for everyday business needs
    </h1>

    <p class="w-[50%] text-center">
      Nevo is the visionary parent company dedicated to harnessing the power of
      technology to address diverse everyday business needs across a multitude
      of industries.
    </p>

    <button
      class="flex py-[18px] px-[73px] justify-center items-center rounded-full bg-nevoSecondary text-white font-custom font-bold"
    >
      Explore products
    </button>

    <img
      src="/assets/notification.png"
      alt="a notification bell"
      class="py-8"
    />

    <img
      src="/assets/heroImage.png"
      alt="a picture of a man operating servers"
    />
  </div>
</template>
