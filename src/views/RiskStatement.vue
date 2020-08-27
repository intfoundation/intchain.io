<template>
  <div class="view-container">
    <div class="section">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.riskstatement.pageTitle") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="risk-statement">
          <div class="list">
            <ul class="list__items">
              <li
                class="list__item"
                v-for="item in $t('pages.riskstatement.listItems')"
                :key="item"
              >
                <span class="list__subTitle">{{ item.title }}</span>
                {{ item.desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>
