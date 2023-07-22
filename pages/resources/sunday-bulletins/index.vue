<template>
  <div id="inner-wrap" class="wrap hfeed kt-clear">
    <div id="primary" class="content-area">
      <!-- header insert -->
      <div class="wp-block-kadence-rowlayout alignnone">
        <div
          id="kt-layout-id_8256a5-66"
          class="kt-row-layout-inner kt-row-has-bg kt-layout-id_8256a5-66"
        >
          <div class="kt-row-layout-overlay kt-row-overlay-normal"></div>
          <div
            class="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-middle kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width"
          >
            <div
              class="wp-block-kadence-column inner-column-1 kadence-column_64dfbe-de"
            >
              <div class="kt-inside-inner-col">
                <div class="wp-block-kadence-rowlayout alignnone">
                  <div
                    id="kt-layout-id_503aa3-a7"
                    class="kt-row-layout-inner kt-layout-id_503aa3-a7"
                  >
                    <div
                      class="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row"
                    >
                      <div
                        class="wp-block-kadence-column inner-column-1 kadence-column_f98dcf-c7"
                      >
                        <div class="kt-inside-inner-col">
                          <h2
                            class="kt-adv-heading_5d7d15-3b wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color"
                            data-kb-block="kb-adv-heading_5d7d15-3b"
                          >
                            Sunday Bulletins
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- header insert -->
      <div class="content-container site-container">
        <div
          class="tribe-common tribe-events tribe-events-view tribe-events-view--list tribe-common--breakpoint-xsmall tribe-common--breakpoint-medium tribe-common--breakpoint-full"
        >
          <div class="tribe-common-l-container tribe-events-l-container">
            <div class="tribe-events-calendar-latest-past">
              <Bulletin v-if="data && !pending"
                v-for="event in data?.stories"
                :event="event"
                :cv="data.cv"
              ></Bulletin>


              <!-- Waiting for data -->
              <LoadingData v-if="pending" label="Sunday Bulletins"/>

              <!-- Data is empty or has an error -->
              <EmptyData v-if="!data?.stories?.length && !pending" label="Sunday Bulletins" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Sunday Bulletins'
})
const { pending, data } = await useFetch(
  "https://api.storyblok.com/v2/cdn/stories?starts_with=all-news&token=jmrSXvK178kWedQ67oQLoAtt",
  {
    lazy: true,
    headers: {
      "cache-control": "no-cache",
    },
  }
);
</script>

<style scoped>
@import "@/assets/css/our-people";
@import "@/assets/css/events";
</style>
