<template>
  <div class="view-container">
    <div class="section section--spacing-bottom">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.nodeplan.pageTitle") }}
            </div>
            <div class="header-section__subTitle">
              {{ $t("pages.nodeplan.pageSubTitle1") }}
              <br /><br />
              {{ $t("pages.nodeplan.pageSubTitle2") }}
              <br /><br />
              {{ $t("pages.nodeplan.pageSubTitle3") }}
              <br /><br />
              <a href=""></a>
            </div>
          </div>
          <div class="header-section__graphic hide-sml">
            <img src="../assets/images/node-plan-pattern.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="section__title-container">
          <h2 class="section__title section__title--alt">
            {{ $t("pages.nodeplan.panelsTitle") }}
          </h2>
        </div>
        <div class="dual-grid">
          <div class="dual-grid__item dual-grid__item--spacing-bottom">
            <div class="dual-grid__image">
              <img src="../assets/images/node-globe-02.png" alt="" />
            </div>
            <div class="dual-grid__info">
              <h2 class="dual-grid__title">
                {{ $t("pages.nodeplan.panelsSubTitle1") }}
              </h2>
              <ul class="list__items">
                <li
                  class="list__item"
                  v-for="item in $t('pages.nodeplan.panelsDesc1')"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
              <p class="dual-grid__link-sticky">
                <a
                  href="https://medium.com/int-chain/setting-up-a-peer-node-on-the-int-network-9abca5a9f44b"
                  target="_blank"
                  class="button-link button-link--light"
                  >{{ $t("pages.nodeplan.panelsLink1") }}</a
                >
              </p>
            </div>
          </div>
          <div class="dual-grid__item dual-grid__item--spacing-bottom">
            <div class="dual-grid__image">
              <img src="../assets/images/node-globe-01.png" alt="" />
            </div>
            <div class="dual-grid__info">
              <h2 class="dual-grid__title">
                {{ $t("pages.nodeplan.panelsSubTitle2") }}
              </h2>
              <ul class="list__items">
                <li
                  class="list__item"
                  v-for="item in $t('pages.nodeplan.panelsDesc2')"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
              <p class="dual-grid__link-sticky">
                <a
                  href="https://titansdocs.intchain.io"
                  target="_blank"
                  class="button-link button-link--light"
                  >{{ $t("pages.nodeplan.panelsLink2") }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div
        class="section__content section__content--thin-top content-container"
      >
        <div class="dual-sections dual-sections--reverse">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">
              {{ $t("pages.nodeplan.incentivesTitle") }}
            </h2>
            <p>{{ $t("pages.nodeplan.incentivesDesc") }}</p>
          </div>
          <div class="dual-sections__image dual-sections__image--sm">
            <img src="../assets/images/node-layers.png" alt="" />
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
              {{ $t("pages.nodeplan.intTokenTitle") }}
            </h2>
            <p>{{ $t("pages.nodeplan.intTokenSubTitle") }}</p>
            <p>{{ $t("pages.nodeplan.intTokenDesc") }}</p>
          </div>
          <div class="dual-sections__image dual-sections__image--med">
            <img src="../assets/images/icons/coins.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section section--spacing-bottom-lg hide-sml">
      <div class="section__content content-container bg--node-map">
        <div class="banner">
          <div class="banner__info">
            <h2 class="banner__title">
              {{ $t("pages.nodeplan.nodeMapTitle") }}
            </h2>
            <p>{{ $t("pages.nodeplan.nodeMapSubTitle") }}</p>
          </div>
          <div class="banner__graphic">
            <img src="../assets/images/node-distribution-chart.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>
