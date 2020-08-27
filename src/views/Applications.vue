<template>
  <div class="view-container">
    <div class="section section--spacing-bottom">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.applications.pageTitle") }}
            </div>
            <div class="header-section__subTitle">
              {{ $t("pages.applications.pageSubTitle") }}
            </div>
          </div>
          <!-- <div class="header-section__intro">
            {{ $t('pages.applications.intro') }}
          </div> -->
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div
        class="section__content section__content--thin-top content-container"
      >
        <ApplicationsGrid showFull="true" />
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container section__content--hr-top">
        <div class="header-section header-section--alt">
          <div class="header-section__content content-container">
            <div class="header-section__heading">
              <div class="header-section__title">
                {{ $t("pages.applications.routerTitle") }}
              </div>
              <div class="header-section__subTitle">
                {{ $t("pages.applications.routerSubTitle") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div
        class="section__content section__content--tint content-container bg--binary"
      >
        <div class="banner">
          <div class="banner__info">
            <h2 class="banner__title">
              {{ $t("pages.applications.routerBannerTitle") }}
            </h2>
            <p>{{ $t("pages.applications.routerBannerSubTitle") }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section section--spacing-bottom-lg">
      <div class="section__content section__content--tint content-container">
        <div class="dual-sections dual-sections--reverse">
          <div class="dual-sections__info">
            <div class="list">
              <div class="list__title">
                {{ $t("pages.applications.routerListTitle") }}
              </div>
              <ul class="list__items">
                <li
                  class="list__item"
                  v-for="item in $t('pages.applications.routerListItems')"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="dual-sections__image">
            <img src="../assets/images/router.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <!-- <div class="section">
      <div class="section__content content-container">
        <div class="dual-sections">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">{{ $t('pages.applications.routerTitle2') }}</h2>
            <p>{{ $t('pages.applications.routerSubTitle2') }}</p>
          </div>
          <div class="dual-sections__image">
            <img src="../assets/images/router-infographic.png" alt="" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container section__content--hr-top">
        <div class="header-section header-section--alt">
          <div class="header-section__content content-container">
            <div class="header-section__heading">
              <div class="header-section__title">
                {{ $t("pages.applications.OBDTitle") }}
              </div>
              <div class="header-section__subTitle">
                {{ $t("pages.applications.OBDSubTitle") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div
        class="section__content section__content--tint content-container bg--obd"
      >
        <div class="banner">
          <div class="banner__info banner__info--thin">
            <h2 class="banner__title">
              {{ $t("pages.applications.OBDBannerTitle") }}
            </h2>
            <p>{{ $t("pages.applications.OBDBannerSubTitle") }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <!-- <div class="section">
      <div class="section__content section__content--tint content-container">
        <div class="dual-sections dual-sections--reverse">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">{{ $t('pages.applications.OBDTitle2') }}</h2>
            <p>{{ $t('pages.applications.OBDSubTitle2') }}</p>
          </div>
          <div class="dual-sections__image">
            <img src="../assets/images/algo-car.png" alt="" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- .section end -->

    <div class="section">
      <div
        class="section__content section__content--thin-top content-container"
      >
        <div class="dual-grid">
          <div class="dual-grid__item">
            <div class="dual-grid__image">
              <img src="../assets/images/managecar.png" alt="" />
            </div>
            <div class="dual-grid__info">
              <h2 class="dual-grid__title">
                {{ $t("pages.applications.OBDTitle4") }}
              </h2>
              <p>{{ $t("pages.applications.OBDSubTitle4") }}</p>
            </div>
          </div>
          <div class="dual-grid__item">
            <div class="dual-grid__image">
              <img src="../assets/images/systemcar.png" alt="" />
            </div>
            <div class="dual-grid__info">
              <h2 class="dual-grid__title">
                {{ $t("pages.applications.OBDTitle5") }}
              </h2>
              <p>{{ $t("pages.applications.OBDSubTitle5") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section section--light">
      <div
        class="section__content section__content--thin-top content-container"
      >
        <div class="section__title-container">
          <h2 class="section__title section__title--alt">
            {{ $t("pages.applications.coreFunctions") }}
          </h2>
        </div>
        <div class="functions-grid">
          <div class="functions-grid__item">
            <div class="functions-grid__graphic">
              <div class="functions-grid__icon functions-grid__icon--remote">
                <span></span>
              </div>
            </div>
            <div class="functions-grid__title">
              {{ $t("pages.applications.coreFunctionsItems.title1") }}
            </div>
            <div class="functions-grid__description">
              {{ $t("pages.applications.coreFunctionsItems.subTitle1") }}
            </div>
          </div>
          <div class="functions-grid__item">
            <div class="functions-grid__graphic">
              <div class="functions-grid__icon functions-grid__icon--security">
                <span></span>
              </div>
            </div>
            <div class="functions-grid__title">
              {{ $t("pages.applications.coreFunctionsItems.title2") }}
            </div>
            <div class="functions-grid__description">
              {{ $t("pages.applications.coreFunctionsItems.subTitle2") }}
            </div>
          </div>
          <div class="functions-grid__item">
            <div class="functions-grid__graphic">
              <div class="functions-grid__icon functions-grid__icon--position">
                <span></span>
              </div>
            </div>
            <div class="functions-grid__title">
              {{ $t("pages.applications.coreFunctionsItems.title3") }}
            </div>
            <div class="functions-grid__description">
              {{ $t("pages.applications.coreFunctionsItems.subTitle3") }}
            </div>
          </div>
          <div class="functions-grid__item">
            <div class="functions-grid__graphic">
              <div class="functions-grid__icon functions-grid__icon--driving">
                <span></span>
              </div>
            </div>
            <div class="functions-grid__title">
              {{ $t("pages.applications.coreFunctionsItems.title4") }}
            </div>
            <div class="functions-grid__description">
              {{ $t("pages.applications.coreFunctionsItems.subTitle4") }}
            </div>
          </div>
          <div class="functions-grid__item">
            <div class="functions-grid__graphic">
              <div class="functions-grid__icon functions-grid__icon--community">
                <span></span>
              </div>
            </div>
            <div class="functions-grid__title">
              {{ $t("pages.applications.coreFunctionsItems.title5") }}
            </div>
            <div class="functions-grid__description">
              {{ $t("pages.applications.coreFunctionsItems.subTitle5") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="dual-sections">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">
              {{ $t("pages.applications.OBDTitle3") }}
            </h2>
            <p>{{ $t("pages.applications.OBDSubTitle3") }}</p>
          </div>
          <div class="dual-sections__image">
            <img src="../assets/images/future-layouts.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>

<script>
import ApplicationsGrid from "@/components/ApplicationsGrid.vue";

export default {
  components: {
    ApplicationsGrid
  }
};
</script>

<style lang="scss"></style>
