<template>
  <div id="inner-wrap" class="wrap hfeed kt-clear">
    <div id="primary" class="content-area">
      <div class="content-container site-container">
        <main id="tribe-events-pg-template" class="tribe-events-pg-template">
          <div
            id="tribe-events-content"
            class="tribe-events-single entry content-bg"
          >
            <div class="entry-content-wrap">
              <!-- Notices -->
              <div
                class="entry-header tribe_events-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit"
              >
                <p class="tribe-events-back">
                  <NuxtLink to="/resources/sunday-bulletins">
                    « Back to Sunday Bulletins
                  </NuxtLink>
                </p>
                <h1 class="entry-title tribe-events-single-event-title">
                  {{ data.story.content.Title }}
                </h1>
              </div>

              <div class="tribe-events-schedule tribe-clearfix">
                <h2>
                  <span class="tribe-event-date-start">{{ time }}</span>
                   
                </h2>
              </div>


              <div
                id="post-1059"
                class="post-1059 tribe_events type-tribe_events status-publish has-post-thumbnail hentry"
              >
                <!-- Event featured image, but exclude link -->

                <!-- Event content -->
                <div
                  class="tribe-events-single-event-description tribe-events-content"
                >
                  <div class="wp-block-kadence-rowlayout alignnone">
                    <div
                      id="kt-layout-id_104782-4d"
                      class="kt-row-layout-inner kt-layout-id_104782-4d"
                    ></div>
                  </div>

                  <div v-html="eventDescription"></div>
                </div>
                <!-- .tribe-events-single-event-description -->

                <!-- Event meta -->
              </div>
              <!-- #post-x -->

              <!-- Event footer -->

              <!-- #tribe-events-footer -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Chrisco City Church News'
})
const { id } = useRoute().params;
const { cv } = useRoute().query;

const url = `https://api.storyblok.com/v2/cdn/stories/all-news/${id}?cv=${cv}&token=RFQKxVHMHVPx8eryoSNobgtt&version=published`;
const { data } = await useFetch(url);

const eventDescription = computed(() =>
  renderRichText(toRaw(data.value).story.content.Description)
);

function formatDate(inputDate) {
  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Define the months as an array to get the month name later
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the date components
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  // Combine the components to form the final formatted string
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

const time = computed(() => formatDate(toRaw(data.value).story.content.Date));

</script>

<style scoped>
@import "@/assets/css/news-single.strip.css";

.site-container {
  max-width: 800px !important;
}
.content-area {
  margin-top: 140px !important;
  margin-bottom: 100px !important;
}

.tribe-events-schedule.tribe-clearfix {
  margin-bottom: 0 !important;
}

@media all and (max-width: 1024px) {
.content-area {
  padding: 0 30px !important;
}
}
</style>
