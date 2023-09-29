<template>
  <div class="wp-block-kadence-rowlayout alignnone">
    <div
      id="kt-layout-id_d624c0-d7"
      class="kt-row-layout-inner kt-row-has-bg kt-layout-id_d624c0-d7"
    >
      <div class="kt-row-layout-overlay kt-row-overlay-normal"></div>
      <div
        class="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width"
      >
        <div
          class="wp-block-kadence-column inner-column-1 kadence-column_8363d9-9c"
        >
          <div class="kt-inside-inner-col">
            <div class="wp-block-kadence-rowlayout alignnone">
              <div
                id="kt-layout-id_9a0889-a4"
                class="kt-row-layout-inner kt-layout-id_9a0889-a4"
              >
                <div
                  class="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row"
                >
                  <div
                    class="wp-block-kadence-column inner-column-1 kadence-column_1bebba-a8"
                  >
                    <div class="kt-inside-inner-col">
                      <h2
                        class="kt-adv-heading_95694b-54 wp-block-kadence-advancedheading"
                        data-kb-block="kb-adv-heading_95694b-54"
                        style="margin-bottom: 0"
                      >
                        Latest News
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="!data?.length && !pending"
              id="no-news"
              style="text-align: center"
            >
              <img
                src="/img/no_news.png"
                style="height: 250px; margin: 0 auto"
              />
              <h4>News updates will be shown here</h4>
            </div>

            <div
              v-if="data?.length && !pending"
              class="wp-block-kadence-posts kb-posts kb-posts-id-_55b14f-5c content-wrap grid-cols kb-posts-style-unboxed grid-sm-col-2 grid-lg-col-3 item-image-style-above"
            >
              <article
                v-for="event in data"
                class="entry content-bg loop-entry post-68 post type-post status-publish format-standard has-post-thumbnail hentry category-hope-for-tomorrow category-past-messages"
              >
                <!-- .post-thumbnail -->
                <div class="entry-content-wrap">
                  <header class="entry-header">
                    <div class="entry-taxonomies">
                      <span
                        class="category-links term-links category-style-normal"
                        ><a rel="category tag">{{
                          event.content.Title
                        }}</a></span
                      >
                    </div>
                    <!-- .entry-taxonomies -->
                    <div
                      class="event-description"
                      v-html="event.content.Description"
                    ></div>
                    <!-- <h2 class="entry-title">
                      <a
                        rel="bookmark"
                        style="font-weight: 600; font-size: 17px"
                        >Declare fruitfulness in all facets of your life.
                        Declare God’s ...</a
                      >
                    </h2> -->
                    <div class="entry-meta entry-meta-divider-dot">
                      <span class="posted-on">
                        <span class="meta-label">Posted on</span
                        ><time
                          class="entry-date published"
                          datetime="2021-09-06T08:57:00+00:00"
                          >{{ event.content.Date }}</time
                        >
                      </span>
                    </div>
                    <!-- .entry-meta -->
                  </header>
                  <!-- .entry-header -->
                  <footer class="entry-footer">
                    <div class="entry-actions">
                      <p class="more-link-wrap">
                        <NuxtLink class="post-more-link" :to="`/resources/sunday-bulletins/${event.slug}?cv=${event.cv}`"
                          >read more 
                      </NuxtLink>
                      </p>
                    </div>
                    <!-- .entry-actions -->
                  </footer>
                  <!-- .entry-footer -->
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

const { pending, data } = await useFetch(
  "https://api.storyblok.com/v2/cdn/stories?starts_with=all-news&sort_by=published_at:desc&per_page=3&page=1&token=jmrSXvK178kWedQ67oQLoAtt",
  {
    lazy: true,
    headers: {
      "cache-control": "no-cache",
    },
    transform(data) {
      return data.stories.map((item) => {
        item.content.Date = formatDate(item.published_at);
        item.content.Description = renderRichText(item.content.Description);
        item.cv = data.cv
        return item;
      });
    },
  }
);
</script>

<style scoped>
.entry.loop-entry {
  box-shadow: none;
}

.event-description {
  height: 58px; /* Set the desired width for the excerpt container */
  overflow: hidden; /* Hide overflowing content */
  text-overflow: ellipsis; /* Display ellipsis (...) for truncated content */
}

.loop-entry.type-post .entry-taxonomies, .loop-entry.type-post .entry-taxonomies a {
    color: rgba(205,43,37,1);
}
</style>
