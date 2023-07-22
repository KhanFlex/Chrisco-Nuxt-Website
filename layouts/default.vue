<template>
  <div id="wrapper" class="site wp-site-blocks">
    <!-- Navbar start -->
    <Navbar />
    <!-- Navbar end -->

    <slot />

    <!-- Footer start -->
    <Footer />
    <!-- Footer end -->
  </div>
  <div
    id="mobile-drawer"
    class="popup-drawer popup-drawer-layout-sidepanel popup-drawer-animation-fade popup-drawer-side-right"
    data-drawer-target-string="#mobile-drawer"
  >
    <div
      class="drawer-overlay"
      data-drawer-target-string="#mobile-drawer"
    ></div>
    <div class="drawer-inner">
      <div class="drawer-header">
        <button
          class="menu-toggle-close drawer-toggle"
          aria-label="Close menu"
          data-toggle-target="#mobile-drawer"
          data-toggle-body-class="showing-popup-drawer-from-right"
          aria-expanded="true"
          data-set-focus=".menu-toggle-open"
          value=""
        >
          <span class="toggle-close-bar"></span>
          <span class="toggle-close-bar"></span>
        </button>
      </div>
      <div
        class="drawer-content mobile-drawer-content content-align-left content-valign-top"
      >
        <div
          class="site-header-item site-header-focus-item site-header-item-mobile-navigation mobile-navigation-layout-stretch-false"
          data-section="kadence_customizer_mobile_navigation"
        >
          <nav
            id="mobile-site-navigation"
            class="mobile-navigation drawer-navigation drawer-navigation-parent-toggle-false"
            role="navigation"
            aria-label="Primary Mobile Navigation"
          >
            <div class="mobile-menu-container drawer-menu-container">
              <ul id="mobile-menu" class="menu has-collapse-sub-nav">
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-988 current_page_item menu-item-1071"
                >
                  <a aria-current="page">Home</a>
                </li>

                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1244"
                >
                  <div class="drawer-nav-drop-wrap">
                    <a>About Us</a
                    ><button
                      class="drawer-sub-toggle"
                      data-toggle-duration="10"
                      data-toggle-target="#mobile-menu .menu-item-1244 > .sub-menu"
                      aria-expanded="false"
                    >
                      <span class="screen-reader-text">Expand child menu</span
                      ><span class="kadence-svg-iconset"
                        ><svg
                          aria-hidden="true"
                          class="kadence-svg-icon kadence-arrow-down-svg"
                          fill="currentColor"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <title>Expand</title>
                          <path
                            d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                          ></path></svg
                      ></span>
                    </button>
                  </div>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1243"
                    >
                      <a>Our Story</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-tribe_events menu-item-1235"
                    >
                      <a>Our people</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-tribe_events menu-item-1235"
                    >
                      <a>Our beliefs</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-tribe_events menu-item-1235"
                    >
                      <a>Our governance</a>
                    </li>
                  </ul>
                </li>

                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1084"
                >
                  <div class="drawer-nav-drop-wrap">
                    <a>Calendar</a
                    ><button
                      class="drawer-sub-toggle"
                      data-toggle-duration="10"
                      data-toggle-target="#mobile-menu .menu-item-1084 > .sub-menu"
                      aria-expanded="false"
                    >
                      <span class="screen-reader-text">Expand child menu</span
                      ><span class="kadence-svg-iconset"
                        ><svg
                          aria-hidden="true"
                          class="kadence-svg-icon kadence-arrow-down-svg"
                          fill="currentColor"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <title>Expand</title>
                          <path
                            d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                          ></path></svg
                      ></span>
                    </button>
                  </div>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1073"
                    >
                      <a>Master Calendar</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1083"
                    >
                      <a>Events</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1082"
                    >
                      <a>Weekly Gatherings</a>
                    </li>
                  </ul>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1078"
                >
                  <div class="drawer-nav-drop-wrap">
                    <a>Resources</a
                    ><button
                      class="drawer-sub-toggle"
                      data-toggle-duration="10"
                      data-toggle-target="#mobile-menu .menu-item-1078 > .sub-menu"
                      aria-expanded="false"
                    >
                      <span class="screen-reader-text">Expand child menu</span
                      ><span class="kadence-svg-iconset"
                        ><svg
                          aria-hidden="true"
                          class="kadence-svg-icon kadence-arrow-down-svg"
                          fill="currentColor"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <title>Expand</title>
                          <path
                            d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                          ></path></svg
                      ></span>
                    </button>
                  </div>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242"
                    >
                      <a>Sermons</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1077"
                    >
                      <a>Sunday Bulletins</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1257"
                    >
                      <a>Daily Devotions</a>
                    </li>
                  </ul>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1072"
                >
                  <a>Contact</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1074"
                >
                  <a>Giving</a>
                </li>
              </ul>
            </div>
          </nav>
          <!-- #site-navigation -->
        </div>
        <!-- data-section="mobile_navigation" -->
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/home.css";

#kt-adv-heading_fb1a11-c9, #kt-adv-heading_fb1a11-c9 .wp-block-kadence-advancedheading, .wp-block-kadence-advancedheading.kt-adv-heading_fb1a11-c9[data-kb-block="kb-adv-heading_fb1a11-c9"], .kadence-advanced-heading-wrapper .kt-adv-heading_fb1a11-c9[data-kb-block="kb-adv-heading_fb1a11-c9"] {
    line-height: 1.5em;
}
</style>
