<template>
  <div class="view-container">
    <div class="hero">
      <!--  <div class="launch_title content-container">-->
      <!--    <span>{{ $t("pages.home.launchTitle") }}</span>-->
      <!--  </div>-->
      <!--  <CountDown />-->
      <div class="hero__content content-container">
        <div class="hero__header">
          <h1 class="hero__title">{{ $t("pages.home.welcomeMsg") }}</h1>
          <div class="hero__subTitle">{{ $t("pages.home.welcomeNote") }}</div>
        </div>
          <div class="hero__graphic"> 
            <video controls muted autoplay>
              <source :src="vioUrl" type="video/mp4">
            </video> 
          </div>
      </div>
    </div>
    <!-- .hero end -->
    <div class="section section--push-up section--background-alt">
      <div class="section__content content-container">
        <div class="section__title-container section__title-container--indent">
          <h2 class="section__title">{{ $t("pages.home.header1") }}</h2>
          <div class="section__title-sub-container">
            <div class="section__subTitle">
              {{ $t("pages.home.subheader1") }}
            </div>
          </div>
        </div>
        <div class="icon-grid">
          <div class="icon-grid__item">
            <div class="icon-grid__icon icon-grid__icon--layers"></div>
            <div class="icon-grid__title">
              {{ $t("pages.home.gridIcons.header1") }}
            </div>
            <div class="icon-grid__description">
              {{ $t("pages.home.gridIcons.desc1") }}
            </div>
          </div>
          <div class="icon-grid__item">
            <div class="icon-grid__icon icon-grid__icon--hex"></div>
            <div class="icon-grid__title">
              {{ $t("pages.home.gridIcons.header2") }}
            </div>
            <div class="icon-grid__description">
              {{ $t("pages.home.gridIcons.desc2") }}
            </div>
          </div>
          <div class="icon-grid__item">
            <div class="icon-grid__icon icon-grid__icon--grid"></div>
            <div class="icon-grid__title">
              {{ $t("pages.home.gridIcons.header3") }}
            </div>
            <div class="icon-grid__description">
              {{ $t("pages.home.gridIcons.desc3") }}
            </div>
          </div>
          <div class="icon-grid__item">
            <div class="icon-grid__icon icon-grid__icon--db"></div>
            <div class="icon-grid__title">
              {{ $t("pages.home.gridIcons.header4") }}
            </div>
            <div class="icon-grid__description">
              {{ $t("pages.home.gridIcons.desc4") }}
            </div>
          </div>
          <div class="icon-grid__item">
            <div class="icon-grid__icon icon-grid__icon--cube"></div>
            <div class="icon-grid__title">
              {{ $t("pages.home.gridIcons.header5") }}
            </div>
            <div class="icon-grid__description">
              {{ $t("pages.home.gridIcons.desc5") }}
            </div>
          </div>
          <div class="icon-grid__item">
            <div class="icon-grid__icon icon-grid__icon--diamond"></div>
            <div class="icon-grid__title">
              {{ $t("pages.home.gridIcons.header6") }}
            </div>
            <div class="icon-grid__description">
              {{ $t("pages.home.gridIcons.desc6") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section section--background-alt">
      <div
        class="section__content section__content--tint content-container bsn"
      >
        <div class="banner-bsn">
          <div class="banner-bsn__info">
            <h2 class="banner-bsn__title">{{ $t("pages.home.bsnHeader") }}</h2>
            <p>{{ $t("pages.home.bsnDesc") }}</p>
            <p>
              <router-link
                to="/bsn"
                class="banner-bsn__link button-link button-link--light"
                >{{ $t("pages.home.bsnViewMore") }}</router-link
              >
            </p>
          </div>
          <div class="banner-bsn__graphic">
            <img src="../assets/images/bsn-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section section--background-alt">
      <div class="section__content content-container">
        <div class="section__title-container">
          <h2 class="section__title">{{ $t("pages.home.header2") }}</h2>
          <div class="section__title-sub-container">
            <div class="section__subTitle">
              {{ $t("pages.home.subheader2") }}
            </div>
            <div class="section__more-link">
              <router-link to="/applications" class="button-link">{{
                $t("pages.home.viewMore2")
              }}</router-link>
            </div>
          </div>
        </div>
        <ApplicationsGrid spacing="true" />
      </div>
    </div>
    <!-- .section end -->

    <!-- <div class="section">
      <div class="section__content content-container">
        <div class="section__title-container">
          <h2 class="section__title">{{ $t('pages.home.latestNews') }}</h2>
          <div class="section__title-sub-container">
            <div class="section__subTitle">&nbsp;</div>
            <div class="section__more-link"><a href="https://medium.com/@INT_Chain" target="_blank" class="button-link">{{ $t('pages.home.viewMoreNews') }}</a></div>
          </div>
        </div>
        <div class="latest-news">

        </div>
      </div>
    </div> -->
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="dual-sections dual-sections--reverse">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">
              {{ $t("pages.home.tendermintTitle") }}
            </h2>
            <p>{{ $t("pages.home.tendermintSubTitle") }}</p>
          </div>
          <div class="dual-sections__image dual-sections__image--tendermint">
            <img src="../assets/images/tendermint-logo-black.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content section__content--hr-top content-container">
        <div class="section__title-container">
          <h2 class="section__title">{{ $t("pages.home.partners") }}</h2>
          <div class="section__title-sub-container">
            <div class="section__subTitle">
              {{ $t("pages.home.partnersSubheader") }}
            </div>
            <div class="section__more-link">
              <router-link to="/team" class="button-link">{{
                $t("pages.home.partnersViewMore")
              }}</router-link>
            </div>
          </div>
        </div>
        <Partners />
      </div>
    </div>
    <!-- .section end -->

    <div class="section section--light">
      <div class="section__content section__content--hr-top content-container">
        <div class="section__title-container">
          <h2 class="section__title">{{ $t("pages.team.exchanges") }}</h2>
        </div>
        <Exchanges />
      </div>
    </div>
    <!-- .section end -->

    <!-- <div class="section section--light">
      <div class="section__content section__content--hr-top content-container">
        <div class="section__title-container">
          <h2 class="section__title">{{ $t("pages.team.explorers") }}</h2>
        </div>
        <Explorers />
      </div>
    </div> -->
    <!-- .section end -->

    <div class="section section--light">
      <div class="section__content section__content--hr-top content-container">
        <div class="section__title-container">
          <h2 class="section__title">{{ $t("pages.home.mentionIn") }}</h2>
          <!-- <div class="section__title-sub-container">
            <div class="section__subTitle">Media mentions</div>
          </div> -->
        </div>
        <Featured />
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>

<script>
import ApplicationsGrid from "@/components/ApplicationsGrid.vue";
import Partners from "@/components/Partners.vue";
import Featured from "@/components/Featured.vue";
import Exchanges from "@/components/Exchanges.vue";
// import Explorers from "@/components/Explorers.vue";
// import CountDown from "@/components/CountDown.vue";
import vio from "../../src/assets/images/videoplayback.mp4"

export default {
  name: "Home",
  data(){
    return{
      vioUrl:vio
    }
  },
  components: {
    ApplicationsGrid,
    Partners,
    Featured,
    Exchanges
    // CountDown
  }
};
</script>

<style lang="scss"></style>
