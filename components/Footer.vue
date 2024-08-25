<template>
  <footer
    class="flex flex-col gap-8 bg-[#0A0B20] rounded-t-3xl p-16 pt-20 text-white"
  >
    <div class="first flex items-center justify-between">
      <div class="w-[70%] flex flex-col gap-5">
        <div class="">
          <img src="/assets/footerLogo.png" alt="logo" />
        </div>
        <p class="text-lg font-medium font-[Inter]">
          Nevo is the visionary parent company dedicated to harnessing the power
          of technology to address diverse everyday business needs across a
          multitude of industries.
        </p>
      </div>
      <div class="">
        <button
          class="rounded-full py-[18px] px-[88px] bg-nevoSecondary text-lg font-bold font-custom"
        >
          TALK TO SALES
        </button>
      </div>
    </div>

    <div class="second flex justify-between items-center">
      <ul class="flex flex-col gap-5 font-custom text-4xl">
        <ol class="flex items-center gap-6">
          HOME
          <img src="/assets/rightArrow.png" alt="" class="w-[50%]" />
        </ol>
        <ol>
          ABOUT
        </ol>
        <ol>
          PRODUCTS
        </ol>
        <ol>
          CONTACT
        </ol>
      </ul>
      <div class="flex flex-col gap-8">
        <div class="">
          <img src="/assets/footerImg.png" alt="" />
        </div>
        <div class="socials flex gap-5">
          <img src="/assets/ig.png" alt="" />
          <img src="/assets/facebook.png" alt="" />
          <img src="/assets/linkedIn.png" alt="" />
          <img src="/assets/twitter.png" alt="" />
        </div>
      </div>
    </div>
    <hr />
    <p class="text-[#98A2B3]">© 2023 nevosolutions. All rights reserved.</p>
  </footer>
</template>
