<template>
  <div class="view-container">
    <div class="section section--spacing-bottom-lg">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.noderequest.pageTitle") }}
            </div>
            <p class="noderequest-header__subtitle">
              {{ $t("pages.noderequest.pageSubTitle") }}
            </p>
            <p>
              <a
                :href="$t('pages.noderequest.requestLink')"
                class="button-link noderequest-header__button"
                target="_blank"
                >{{ $t("pages.noderequest.requestBtn") }}</a
              >
            </p>
          </div>
          <div
            class="header-section__graphic hide-sml noderequest-header__graphic"
          >
            <img src="../assets/images/node-plan-pattern.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
    <div class="section">
      <div class="section__content content-container">
        <div class="header-section__title">
          {{ $t("pages.noderequest.guidance.title") }}
        </div>
        <div class="noderequest__row">
          <ul>
            <li>{{ $t("pages.noderequest.guidance.li1") }}</li>
            <li>{{ $t("pages.noderequest.guidance.li2") }}</li>
            <li>{{ $t("pages.noderequest.guidance.li3") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .section end -->
    <div class="section">
      <div class="section__content content-container">
        <div class="header-section__title">
          {{ $t("pages.noderequest.conditions.title") }}
        </div>
        <div class="noderequest__row">
          <ul>
            <li>{{ $t("pages.noderequest.conditions.li1") }}</li>
            <li>{{ $t("pages.noderequest.conditions.li2") }}</li>
            <li>{{ $t("pages.noderequest.conditions.li3") }}</li>
            <li>{{ $t("pages.noderequest.conditions.li4") }}</li>
            <li>{{ $t("pages.noderequest.conditions.li5") }}</li>
            <li>{{ $t("pages.noderequest.conditions.li6") }}</li>
          </ul>
        </div>
        <div class="noderequest__row">
          <table class="noderequest-conditions__table">
            <tr
              v-for="item in $t('pages.noderequest.conditions.table')"
              :key="item.label"
            >
              <td>{{ item.label }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="header-section__title">
          {{ $t("pages.noderequest.reward.title") }}
        </div>
        <div class="noderequest__row">
          <ul>
            <li>{{ $t("pages.noderequest.reward.li1") }}</li>
            <li>{{ $t("pages.noderequest.reward.li2") }}</li>
            <li>{{ $t("pages.noderequest.reward.li3") }}</li>
            <li>{{ $t("pages.noderequest.reward.li4") }}</li>
            <li>{{ $t("pages.noderequest.reward.li5") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .section end -->
    <!--    process  -->
    <div class="section">
      <div class="section__content content-container">
        <div class="header-section__title">
          {{ $t("pages.noderequest.process.title") }}
        </div>
        <div class="noderequest__row">
          <ul>
            <li>{{ $t("pages.noderequest.process.li1") }}</li>
            <li>{{ $t("pages.noderequest.process.li2") }}</li>
            <li>{{ $t("pages.noderequest.process.li3") }}</li>
            <li>{{ $t("pages.noderequest.process.li4") }}</li>
            <li>{{ $t("pages.noderequest.process.li5") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <!--    resources  -->
    <div class="section">
      <div class="section__content content-container">
        <div class="header-section__title">
          {{ $t("pages.noderequest.resources.title") }}
        </div>
        <div class="noderequest__row">
          <ul>
            <li
              v-for="item in $t('pages.noderequest.resources.links')"
              :key="item.label"
            >
              <span class="noderequest-resources__span">{{ item.label }}</span>
              <a :href="item.link" target="_blank">{{ item.link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .section end -->
    <!--    FAQ  -->
    <div class="section">
      <div class="section__content content-container">
        <div class="header-section__title">
          {{ $t("pages.noderequest.faq.title") }}
        </div>
        <div class="noderequest__row">
          <ul v-for="item in $t('pages.noderequest.faq.faqs')" :key="item.q">
            <li>{{ item.q }}</li>
            <li>{{ item.a }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>
