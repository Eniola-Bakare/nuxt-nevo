<template>
  <footer
    class="w-full max-w-[1440px] flex flex-col items-center gap-8 bg-[#0A0B20] rounded-t-3xl p-10 lg:pt-16 sm:pt-20 text-white"
  >
    <div
      class="first w-full flex flex-col sm:flex-row items-center justify-between"
    >
      <div
        class="sm:w-[70%] flex items-center flex-col gap-5 pb-5 sm:pb-0 sm:items-start"
      >
        <div class="">
          <img src="/assets/footerLogo.png" alt="logo" />
        </div>
        <p class="text-lg font-medium font-[Inter] text-center sm:text-start ">
          Nevo is the visionary parent company dedicated to harnessing the power
          of technology to address diverse everyday business needs across a
          multitude of industries.
        </p>
      </div>
      <div class="">
        <button
          class="rounded-full  bg-nevoSecondary hover:bg-nevoSecondary/70 transition-all ease-in-out text-lg font-bold font-custom  py-[18px] px-[34px] lg:px-[88px]"
        >
          TALK TO SALES
        </button>
      </div>
    </div>

    <div
      class="second w-full flex flex-col justify-center sm:justify-between items-center sm:flex-row gap-8 sm:gap-0"
    >
      <ul class="flex flex-col items-center sm:items-start  gap-5 font-custom text-4xl">
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
        <div class="flex justify-center items-center">
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
    <div class="w-full">
      <hr />
      <p class="text-[#98A2B3] text-center sm:text-start pt-5">
        © 2023 nevosolutions. All rights reserved.
      </p>
    </div>
  </footer>
</template>
