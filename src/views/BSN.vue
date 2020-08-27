<template>
  <div class="view-container">
    <div class="section section--spacing-bottom-lg">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.bsn.pageTitle") }}
            </div>
            <p><img src="../assets/images/bsn-logo.png" alt="" width="80" /></p>
            <p>{{ $t("pages.bsn.pageIntro") }}</p>
            <p>{{ $t("pages.bsn.pageDesc1") }}</p>
            <p>
              <a
                href="https://global.bsnbase.com"
                class="button-link"
                target="_blank"
                >{{ $t("pages.bsn.bsnGlobalLink") }}</a
              >
            </p>
            <p>{{ $t("pages.bsn.pageDesc2") }}</p>
          </div>
          <div class="header-section__graphic hide-sml">
            <img src="../assets/images/router-infographic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>
