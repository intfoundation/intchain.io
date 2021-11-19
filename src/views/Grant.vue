<template>
  <div class="view-container">
    <div class="section grant__header-section ">
      <div class="header-section grant__header">
        <div class="header-section__content content-container">
          <div class="header-section__heading grant__header-section__heading">
            <div
              class="header-section__title word-space grant__color-white grant__header-font grant__header-title"
            >
              {{ $t("pages.grant.pageTitle") }}
            </div>
            <div
              class="header-section__subTitle word-space grant__color-white grant__header-font grant__header-subTitle"
            >
              {{ $t("pages.grant.pageSubTitle") }}
            </div>
            <p
              class="grant__color-white  grant__header-font grant__header-label"
            >
              {{ $t("pages.grant.headerLabel") }}
            </p>
            <p>
              <a
                :href="$t('pages.grant.grantFormLink')"
                class="button-link grant__header-button-link"
                target="_blank"
                >{{ $t("pages.grant.grantFormLinkLabel") }}</a
              >
            </p>
          </div>
          <div class="header-section__graphic hide-sml grant__header-img">
            <img src="../assets/images/grant/1.png" alt="" class="grant__img" />
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div class="header-section__title grant__header-section__title">
          {{ $t("pages.grant.strengths.title") }}
        </div>

        <div class="grant__row">
          <div
            class="grant__strengths-item"
            v-for="(item, index) in $t('pages.grant.strengths.items')"
            :key="item.id"
          >
            <img :src="strengths[index].imgUrl" alt="" />
            <div class="item-label">{{ item.labelStr }}</div>
            <div class="item-span">{{ item.spanStr }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section grant__expectations-section">
      <div class="section__content content-container">
        <div class="header-section__title grant__header-section__title">
          {{ $t("pages.grant.expectations.title") }}
        </div>

        <div class="grant__row">
          <div
            class="grant__expectations-item"
            v-for="(item, index) in $t('pages.grant.expectations.items')"
            :key="item.id"
          >
            <div class="item-img">
              <img :src="expectations[index].imgUrl" alt="" />
            </div>
            <div class="item-label">{{ item.label }}</div>
          </div>
          <div class="grant__expectations-item-more">
            <div class="item-more-box">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <div class="grant__expectations-desc">
          {{ $t("pages.grant.expectations.desc") }}
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="grant__global-row content-container">
        <div class="grant__global-title">
          {{ $t("pages.grant.global.title") }}
        </div>
        <div class="grant__global-img">
          <!--                    <img src="../assets/images/grant/9.png" alt="">-->
          <img :src="$t('pages.grant.global.imgUrl')" alt="" />
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>

<script lang="ts">
export default {
  name: "grant",
  data() {
    return {
      strengths: [
        { imgUrl: require("../assets/images/grant/2.png") },
        { imgUrl: require("../assets/images/grant/3.png") },
        { imgUrl: require("../assets/images/grant/4.png") },
        { imgUrl: require("../assets/images/grant/5.png") },
        { imgUrl: require("../assets/images/grant/6.png") },
        { imgUrl: require("../assets/images/grant/7.png") }
      ],
      expectations: [
        { imgUrl: require("../assets/images/grant/8-0.png") },
        { imgUrl: require("../assets/images/grant/8-1.png") },
        { imgUrl: require("../assets/images/grant/8-2.png") },
        { imgUrl: require("../assets/images/grant/8-3.png") },
        { imgUrl: require("../assets/images/grant/8-4.png") },
        { imgUrl: require("../assets/images/grant/8-5.png") },
        { imgUrl: require("../assets/images/grant/8-6.png") }
      ]
    };
  }
};
</script>
