<template>
  <div class="wp-block-kadence-column inner-column-1 kadence-column_01ebc3-11">
    <div class="kt-inside-inner-col">
      <div id="kt-info-box_6a88bc-dc" class="wp-block-kadence-infobox">
        <a
          class="kt-blocks-info-box-link-wrap info-box-link kt-blocks-info-box-media-align-left kt-info-halign-center"
          ><div class="kt-blocks-info-box-media-container">
            <div class="kt-blocks-info-box-media kt-info-media-animate-none">
              <div class="kadence-info-box-image-inner-intrisic-container">
                <div
                  class="kadence-info-box-image-intrisic kt-info-animate-none kb-info-box-image-ratio kb-info-box-image-ratio-square"
                >
                  <div class="kadence-info-box-image-inner-intrisic">
                    <img
                      decoding="async"
                      :src="img"
                      alt=""
                      width="768"
                      height="768"
                      class="kt-info-box-image wp-image-1165"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="kt-infobox-textcontent"></div
        ></a>
      </div>

      <h3
        class="kt-adv-heading_8f88da-cb wp-block-kadence-advancedheading"
        data-kb-block="kb-adv-heading_8f88da-cb"
      >
        {{name}}
      </h3>

      <p
        class="kt-adv-heading_c4bcbc-4e wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
        data-kb-block="kb-adv-heading_c4bcbc-4e"
      >
        {{title}}
      </p>
    </div>
  </div>
</template>

<script setup>
 const { name, img, title  } = defineProps(["name", "img", "title"])
 
</script>

<style scoped>
@import "@/assets/css/our-people.css";

p.kt-adv-heading_c4bcbc-4e {
  color: rgba(205,43,37,1) !important; 
}
</style>