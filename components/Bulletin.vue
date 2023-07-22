<template>
  <div class="tribe-common-g-row tribe-events-calendar-latest-past__event-row">
    <div
      class="tribe-events-calendar-latest-past__event-wrapper tribe-common-g-col"
    >
      <article
        class="tribe-events-calendar-latest-past__event tribe-common-g-row tribe-common-g-row--gutters post-1249 tribe_events type-tribe_events status-publish has-post-thumbnail hentry"
      >
        <div
          class="tribe-events-calendar-latest-past__event-details tribe-common-g-col"
          style="width: 100%"
        >
          <header class="tribe-events-calendar-latest-past__event-header">
            <div
              class="tribe-events-calendar-latest-past__event-datetime-wrapper tribe-common-b2"
            >
              <time
                class="tribe-events-calendar-latest-past__event-datetime"
                datetime="2022-03-12"
              >
                <span class="tribe-event-date-start">{{ time }}</span>
              </time>
            </div>
            <h3
              class="tribe-events-calendar-latest-past__event-title tribe-common-h6 tribe-common-h4--min-medium"
            >
              <NuxtLink
                :to="`sunday-bulletins/${event.slug}?cv=${cv}`"
                class="tribe-events-calendar-latest-past__event-title-link tribe-common-anchor-thin"
              >
                {{ event.content.Title }}
              </NuxtLink>
            </h3>
          </header>

          <div
            class="tribe-events-calendar-latest-past__event-description tribe-common-b2 tribe-common-a11y-hidden"
          >
            <div class="event-description" v-html="eventDescription"></div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const { event, cv } = defineProps(["event", "cv"]);

const eventDescription = computed(() =>
  renderRichText(event.content.Description)
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

const time = computed(() => formatDate(event.content.Date));
</script>

<style scoped>
@import "@/assets/css/event.strip.css";

a[data-v-dadc1f88]:hover, a[data-v-dadc1f88]:focus, a[data-v-dadc1f88]:active {
  color: rgba(205,43,37,1) !important; 
}
</style>
