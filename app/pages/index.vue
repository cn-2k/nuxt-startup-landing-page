<template>
  <div>
    <PageSection
      v-motion-fade-visible
      column
      class="relative md:py-40"
    >
      <GridPattern />
      <div class="text-center">
        <div class="mb-10">
          <SectionBadge
            text="Your awesome section badge"
            icon="i-material-symbols-favorite"
            href="https://nuxt.com/"
            shiny
          />
        </div>
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Your <span class="magic-text">awesome</span> hero text here
        </h1>
        <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
        <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
          <Button>
            Start free trial <Icon
              name="i-heroicons-arrow-right"
              class="w-4 h-4 ml-2"
            />
          </Button>
        </div>
      </div>
    </PageSection>

    <PageSection
      class="!pt-0"
      column
    >
      <div class="relative rounded-xl">
        <div class="w-full h-[10rem] bg-purple-600 mx-auto absolute top-[-4rem] blur-[100px] opacity-40 z-[1]"></div>
        <BorderBeam :size="300" :duration="10" :delay="9" :border-width="2" />

        <ClientOnly>
          <template #fallback>
            <ImagePlaceholder />
          </template>
          <NuxtImg
            width="1920"
            height="1080"
            :src="colorMode.value === 'dark' ? 'https://i.imgur.com/VNfMfim.png' : 'https://i.imgur.com/BU4uuJn.png'"
            alt="Hero Image"
            class="max-w-full rounded-xl h-auto mx-auto [mask-image:linear-gradient(to_bottom,_white_40%,_transparent_100%)] z-[2] relative"
          />
        </ClientOnly>
      </div>
    </PageSection>

    <PageSection v-motion-slide-visible-left>
      <div class="lg:order-last">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Lorem ipsum dolor sit
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Aliqua labore laboris fugiat. Reprehenderit exercitation eu commodo. Officia nostrud sit et aliqua ea ex sunt minim incididunt sunt.
        </div>
      </div>

      <ImagePlaceholder />
    </PageSection>

    <PageSection v-motion-slide-visible-right>
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Lorem ipsum dolor sit
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Aliqua labore laboris fugiat. Reprehenderit exercitation eu commodo. Officia nostrud sit et aliqua ea ex sunt minim incididunt sunt.
        </div>
      </div>

      <ImagePlaceholder />
    </PageSection>

    <PageSection
      id="features"
      class="scroll-mt-10 relative overflow-hidden"
      column
    >
    <RisingStars :width="8000" class="-z-50" />
      <SectionBadge
        text="Features"
        shiny
        only-text
      />
      <div class="text-center flex flex-col items-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Want to see some <span class="magic-text">magic</span> cards?
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <Spotlight class="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
        <!-- Card #1 -->
        <SpotlightCard
          v-for="item in 6"
          :key="item"
        >
          <div class="relative h-full bg-white dark:bg-gray-900 p-6 rounded-lg z-20 overflow-hidden">
            <!-- Radial gradient -->
            <div class="flex flex-col h-full items-center text-center">
              <!-- Text -->
              <div class="grow">
                <h2 class="text-lg text-gray-700 dark:text-white font-bold mb-1">
                  Amazing card title
                </h2>
                <p class="text-sm text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fugit perferendis nostrum vero atque incidunt, reprehenderit.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Spotlight>
    </PageSection>

    <PageSection
      id="pricing"
      v-motion-fade-visible
      column
    >
      <div class="text-center flex flex-col items-center">
        <SectionBadge
          text="Pricing"
          shiny
          only-text
          class="mb-2"
        />
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Prices, prices and more prices
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <PricingTable />
    </PageSection>

    <PageSection
      id="testimonials"
      v-motion-fade-visible
      class="scroll-mt-20"
      column
    >
      <div class="text-center flex flex-col items-center">
        <SectionBadge
          text="Testimonials"
          shiny
          only-text
          class="mb-2"
        />
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          What our <span class="text-gray-500 font-light line-through">fake</span> costumers are saying
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Proident sunt exercitation minim laborum enim laboris labore esse.
        </div>
      </div>

      <div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pause-on-hover>
          <TestimonialCard
            v-for="item in firstTestimonialsRow"
            :key="item.username"
            v-bind="item"
          />
        </Marquee>
        <Marquee
          pause-on-hover
          reverse
        >
          <TestimonialCard
            v-for="item in secondTestimonialsRow"
            :key="item.username"
            v-bind="item"
          />
        </Marquee>
        <div class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-gray-900" />
        <div class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-gray-900" />
      </div>
    </PageSection>

    <PageSection
      v-motion-pop-visible
      column
    >
      <div
        class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow relative bg-gray-100/50 dark:bg-gray-800/50"
      >
        <DotPattern class="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-40 lg:opacity-100" />
        <div class="absolute inset-0 flex justify-center items-center z-[-1]">
          <div class="w-80 h-80 bg-purple-500 rounded-full opacity-90 dark:opacity-60 blur-[120px] animate-color-cycle" />
        </div>
        <div class="flex flex-col gap-16 sm:gap-y-10 px-4 sm:p-6 py-24 sm:py-32 sm:px-16 relative">
          <div class="mx-auto size-24 items-center justify-center flex rounded-[2rem] border dark:border-gray-600 bg-white/10 p-3 shadow-2xl backdrop-blur-lg dark:bg-black/10 lg:size-32">
            <Icon
              name="i-lucide-heart-handshake"
              class="mx-auto size-16 text-black dark:text-white lg:size-24"
            />
          </div>
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Get started/join us
            </h2>
            <div class="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="mt-5 flex items-center gap-x-6 justify-center ">
              <Button>
                Get started <Icon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4 ml-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script setup lang="ts">
import PageSection from "@/components/PriceTable/PageSection.vue"
import Marquee from "@/components/Marquee.vue"
import DotPattern from "@/components/BackgroundPattern/DotPattern.vue"
import GridPattern from "@/components/BackgroundPattern/GridPattern.vue"
import TestimonialCard from "@/components/Cards/TestimonialCard.vue"
import PricingTable from "@/components/PriceTable/PricingTable.vue"
import Spotlight from "@/components/Cards/Spotlight.vue"
import SpotlightCard from "@/components/Cards/SpotlightCard.vue"

const colorMode = useColorMode()

const testimonials = [
  {
    name: "Alice",
    username: "@alice",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Bob",
    username: "@bob",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Diana",
    username: "@diana",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Fiona",
    username: "@fiona",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/6.jpg"
  }
]

const firstTestimonialsRow = testimonials.slice(0, testimonials.length / 2)
const secondTestimonialsRow = testimonials.slice(testimonials.length / 2)
</script>

<style>
html {
  scroll-behavior: smooth
}
</style>
