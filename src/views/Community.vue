<template>
  <div class="view-container">
    <div class="section section--spacing-bottom">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.community.pageTitle") }}
            </div>
            <div class="header-section__subTitle">
              {{ $t("pages.community.pageSubTitle") }}
            </div>
          </div>
          <div class="header-section__intro">
            {{ $t("pages.community.pageIntro") }}
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="section__title-container">
          <h2 class="section__title">
            {{ $t("pages.community.developerCommunityTitle") }}
          </h2>
        </div>
        <div class="section__intro">
          {{ $t("pages.community.developerCommunitySubTitle") }}
        </div>
        <div class="download-grid download-grid--full-width">
          <div class="download-grid__item">
            <div class="download-grid__bg"></div>
            <div class="download-grid__image">
              <img src="../assets/images/developer.png" alt="" />
            </div>
            <div class="download-grid__info">
              <h2 class="download-grid__title">
                {{ $t("pages.community.developerPortalTitle") }}
              </h2>
              <p>{{ $t("pages.community.developerPortalDesc") }}</p>
              <!-- <a
                class="download-grid__link button-link"
                href=""
                target="_blank"
                >{{ $t("pages.community.developerPortalLink") }}</a
              > -->
            </div>
          </div>
        </div>

        <div class="download-grid download-grid--full-width">
          <div class="download-grid__item">
            <div class="download-grid__bg"></div>
            <div class="download-grid__image download-grid__image--lg">
              <img src="../assets/images/dev-icons.png" alt="" />
            </div>
            <div class="download-grid__info">
              <h2 class="download-grid__title">
                {{ $t("pages.community.sdkTitle") }}
              </h2>
              <p>{{ $t("pages.community.sdkDesc") }}</p>
              <!-- <a
                class="download-grid__link button-link"
                href=""
                target="_blank"
                >{{ $t("pages.community.developerPortalLink") }}</a
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="section__title-container">
          <h2 class="section__title">
            {{ $t("pages.community.ecosystemTitle") }}
          </h2>
        </div>
        <div class="section__intro">
          {{ $t("pages.community.ecosystemIntro") }}
        </div>
        <div class="dual-grid dual-grid--vertical-lg">
<!--          <div class="dual-grid__item">-->
<!--            <div class="dual-grid__image">-->
<!--              <img v-if="$i18n.locale === 'en'" src="../assets/images/ecol.png" alt="" />-->
<!--              <img v-else src="../assets/images/ecol-zh.png" alt="" />-->
<!--            </div>-->
<!--          </div>-->
          <div class="dual-grid__item">
            <div class="dual-grid__image">
              <img v-if="$i18n.locale === 'en'" src="../assets/images/lantu.png" alt="" />
              <img v-else src="../assets/images/lantu-zh.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>

<script>
export default {
  name: 'Community',
}
</script>
