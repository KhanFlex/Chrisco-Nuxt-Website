<template>
  <div id="inner-wrap" class="wrap hfeed kt-clear">
    <div id="primary" class="content-area">
      <div class="content-container site-container">
        <main id="main" class="site-main" role="main">
          <div class="content-wrap">
            <article
              id="post-988"
              class="entry content-bg single-entry post-footer-area-boxed post-988 page type-page status-publish hentry"
            >
              <div class="entry-content-wrap">
                <div class="entry-content single-content">
                  <!-- Hero section -->
                  <Hero />

                  <!-- Live stream card -->
                  <Youtube />

                  <!-- Programs section -->
                  <Programs />

                  <!-- Latest News -->
                  <NewsHome />

                  <!-- About section -->
                  <AboutHome />
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Chrisco City Church'
})
</script>