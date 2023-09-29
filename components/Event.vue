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
                <span class="tribe-event-date-start">{{ time }} @ {{ event.content.Location }}</span>
              </time>
            </div>
            <h3
              class="tribe-events-calendar-latest-past__event-title tribe-common-h6 tribe-common-h4--min-medium"
            >
              <a
                 
                title="Community Clean and Connect"
                rel="bookmark"
                class="tribe-events-calendar-latest-past__event-title-link tribe-common-anchor-thin"
              >
                {{ event.content.Title }}
              </a>
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
const { event } = defineProps(["event"]);
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

  // Extract the time components
  let hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";

  // Convert to 12-hour format
  hour = hour % 12 || 12;

  // Combine the components to form the final formatted string
  const formattedDate = `${month} ${day}, ${year} | ${hour}:${minute
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return formattedDate;
}

const time = computed(() => formatDate(event.content.Date));

</script>

<style scoped>
@import "@/assets/css/event.strip.css";

.tribe-event-date-start {
  font-size: 15px;
  font-weight: 400;
}

.tribe-events-calendar-latest-past__event-title.tribe-common-h6.tribe-common-h4--min-medium {
  font-size: 27px;margin-top: 10px;
}

.tribe-events-calendar-latest-past__event-venue-title.tribe-common-b2--bold {
  font-size: 15.5px;
  font-style: normal;
  font-weight: 500;
}

.event-description p {
  font-size: 14px !important;
}

p {
  font-size: 14px !important;
}

address {
  margin-bottom: 5px;
}
</style>
