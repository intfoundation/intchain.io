<template>
  <div class="view-container">
    <div class="section">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.wallet.pageTitle") }}
            </div>
            <div class="header-section__subTitle">
              {{ $t("pages.wallet.pageSubTitle") }}
            </div>
          </div>
          <div class="header-section__graphic hide-sml">
            <img src="../assets/images/smart-wallet.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="download-grid">
          <div class="download-grid__item">
            <div class="download-grid__bg"></div>
            <div class="download-grid__image">
              <img src="../assets/images/monitor.png" alt="" />
            </div>
            <div class="download-grid__info">
              <h2 class="download-grid__title">
                {{ $t("pages.wallet.webWalletTitle") }}
              </h2>
              <p>{{ $t("pages.wallet.webWalletDesc") }}</p>
              <a
                class="download-grid__link button-link"
                href="https://wallet.intchain.io"
                target="_blank"
                >{{ $t("pages.wallet.webWalletLink") }}</a
              >
            </div>
          </div>
        </div>
        <div class="download-grid">
          <div class="download-grid__item">
            <div class="download-grid__bg"></div>
            <div class="download-grid__image">
              <img src="../assets/images/apple-phone.png" alt="" />
            </div>
            <div class="download-grid__info">
              <h2 class="download-grid__title">
                {{ $t("pages.wallet.iosWalletTitle") }}
              </h2>
              <p>{{ $t("pages.wallet.iosWalletDesc") }}</p>
              <a
                class="download-grid__link button-link"
                href="https://testflight.apple.com/join/OwhEEKCJ"
                target="_blank"
                >{{ $t("pages.wallet.iosWalletLink") }}</a
              >
            </div>
          </div>
          <div class="download-grid__item">
            <div class="download-grid__bg"></div>
            <div class="download-grid__image">
              <img src="../assets/images/andr-os-phone.png" alt="" />
            </div>
            <div class="download-grid__info">
              <h2 class="download-grid__title">
                {{ $t("pages.wallet.smartWalletTitle") }}
              </h2>
              <p>{{ $t("pages.wallet.smartWalletDesc") }}</p>
              <a
                class="download-grid__link button-link"
                href="http://wallet.zeerong.com/5r42"
                target="_blank"
                >{{ $t("pages.wallet.smartWalletLink") }}</a
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
