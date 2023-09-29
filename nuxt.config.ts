export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "/js/nav.js",
          type: "text/javascript",
        },
      ],
      bodyAttrs: {
        class:
          "home page-template-default page page-id-988 wp-custom-logo wp-embed-responsive give-test-mode give-page tribe-js footer-on-bottom animate-body-popup link-style-standard content-title-style-hide content-width-fullwidth content-style-unboxed content-vertical-padding-hide transparent-header mobile-transparent-header vsc-initialized",
      },
    },
  },
  modules: [["@storyblok/nuxt", { accessToken: "RFQKxVHMHVPx8eryoSNobgtt" }]]
});
