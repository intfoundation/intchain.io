<template>
  <div class="view-container">
    <div class="section">
      <div class="header-section">
        <div
          class="header-section__content header-section__content--spacing-bottom content-container"
        >
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.team.pageTitle") }}
            </div>
            <div class="header-section__subTitle">
              {{ $t("pages.team.pageSubTitle") }}
            </div>
          </div>
          <!-- <div class="header-section__intro">
            {{ $t('pages.team.pageIntro') }}
          </div> -->
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section">
      <div class="section__content content-container">
        <div
          class="section__title-container section__title-container--spacing-bottom"
        >
          <h2 class="section__title">
            {{ $t("pages.team.executiveManagementTeam") }}
          </h2>
        </div>
        <div class="team-container team-container--spacing-top">
          <div class="team-item">
            <div class="team-item-image">
              <img src="../assets/images/team/chenguanghui.png" alt="" />
            </div>
            <div class="team-item-name">
              {{ $t("pages.team.primaryTeam[1].name") }}
            </div>
            <div class="team-item-role">
              {{ $t("pages.team.primaryTeam[1].role") }}
            </div>
            <div class="team-item-description">
              {{ $t("pages.team.primaryTeam[1].desc") }}
            </div>
          </div>
          <div class="team-item">
            <div class="team-item-image">
              <img src="../assets/images/team/wanghongwei-team.png" alt="" />
            </div>
            <div class="team-item-name">
              {{ $t("pages.team.primaryTeam[2].name") }}
            </div>
            <div class="team-item-role">
              {{ $t("pages.team.primaryTeam[2].role") }}
            </div>
            <div class="team-item-description">
              {{ $t("pages.team.primaryTeam[2].desc") }}
            </div>
          </div>
        </div>
        <div class="team-container team-container--spacing-bottom">
          
          <div class="team-item">
            <div class="team-item-image">
              <img src="../assets/images/team/michaelzhang.png" alt="" />
            </div>
            <div class="team-item-name">
              {{ $t("pages.team.primaryTeam[3].name") }}
            </div>
            <div class="team-item-role">
              {{ $t("pages.team.primaryTeam[3].role") }}
            </div>
            <div class="team-item-description">
              {{ $t("pages.team.primaryTeam[3].desc") }}
            </div>
          </div>
          <div class="team-item">
            <div class="team-item-image">
              <img src="../assets/images/team/liuzhicong.png" alt="" />
            </div>
            <div class="team-item-name">
              {{ $t("pages.team.primaryTeam[4].name") }}
            </div>
            <div class="team-item-role">
              {{ $t("pages.team.primaryTeam[4].role") }}
            </div>
            <div class="team-item-description">
              {{ $t("pages.team.primaryTeam[4].desc") }}
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
        <div
          class="section__title-container section__title-container--spacing-bottom"
        >
          <h2 class="section__title">
            {{ $t("pages.team.advisorAndInvestmentTeam") }}
          </h2>
        </div>
        <div class="team-container team-container--spacing-top secondary">
          <div class="team-item">
            <div class="team-item-image">
              <img src="../assets/images/team/konghuawei.png" alt="" />
            </div>
            <div class="team-item-name">
              {{ $t("pages.team.secondaryTeam[0].name") }}
            </div>
            <div class="team-item-description">
              {{ $t("pages.team.secondaryTeam[0].desc") }}
            </div>
          </div>
          <!--
          <div class="team-item">
            <div class="team-item-image">
              <img src="../assets/images/team/tanlei.png" alt="" />
            </div>
            <div class="team-item-name">
              {{ $t("pages.team.secondaryTeam[1].name") }}
            </div>
            <div class="team-item-description">
              {{ $t("pages.team.secondaryTeam[1].desc") }}
            </div>
          </div>
          -->
          <div class="team-item">
            <div class="team-item-image">
              <img src="../assets/images/team/wangdou.png" alt="" />
            </div>
            <div class="team-item-name">
              {{ $t("pages.team.secondaryTeam[2].name") }}
            </div>
            <div class="team-item-description">
              {{ $t("pages.team.secondaryTeam[2].desc") }}
            </div>
          </div>
        </div>
        <div class="team-container team-container--spacing-bottom tertiary">
          <div
            class="team-item"
            v-for="item in $t('pages.team.tertiaryTeam')"
            :key="item"
          >
            <div class="team-item-name">{{ item.name }}</div>
            <div class="team-item-description">{{ item.desc }}</div>
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
          <h2 class="section__title">{{ $t("pages.team.partnersTitle") }}</h2>
          <div class="section__title-sub-container">
            <div class="section__subTitle">
              {{ $t("pages.team.partnersSubTitle") }}
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
  </div>
  <!-- .view-container end -->
</template>

<script>
import Partners from "@/components/Partners.vue";
import Exchanges from "@/components/Exchanges.vue";

export default {
  name: "Team",
  components: {
    Partners,
    Exchanges
  }
};
</script>
