<template>
  <div class="view-container">
    <div class="section section--spacing-bottom">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.contact.pageTitle") }}
            </div>
            <div class="header-section__subTitle">
              {{ $t("pages.contact.pageSubTitle") }}
            </div>
          </div>
          <!-- <div class="header-section__intro">
            {{ $t('pages.contact.pageIntro') }}
          </div> -->
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="download-grid">
          <div class="download-grid__item">
            <div class="download-grid__image">
              <img src="../assets/images/icons/globe.svg" alt="" />
            </div>
            <div class="download-grid__info">
              <h2 class="download-grid__title">
                {{ $t("pages.contact.technicalSupportTitle") }}
              </h2>
              <p>{{ $t("pages.contact.technicalSupportDesc") }}</p>
              <a
                class="download-grid__link button-link"
                href="mailto:intchainint@gmail.com"
                target="_blank"
                >{{ $t("pages.contact.technicalSupportLink") }}</a
              >
            </div>
          </div>
          <div class="download-grid__item">
            <div class="download-grid__image">
              <img src="../assets/images/icons/briefcase.svg" alt="" />
            </div>
            <div class="download-grid__info">
              <h2 class="download-grid__title">
                {{ $t("pages.contact.cooperationTitle") }}
              </h2>
              <p>{{ $t("pages.contact.cooperationDesc") }}</p>
              <a
                class="download-grid__link button-link"
                href="mailto:intchainint@gmail.com"
                target="_blank"
                >{{ $t("pages.contact.cooperationLink") }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>
