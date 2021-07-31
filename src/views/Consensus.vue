<template>
  <div class="view-container" id="consensusPage">
    <div class="section">
      <div class="header-section">
        <div class="header-section__content content-container">
          <div class="header-section__heading">
            <div class="header-section__title">
              {{ $t("pages.consensus.pageTitle") }}
            </div>
            <div class="header-section__subTitle">
              {{ $t("pages.consensus.pageSubTitle") }}
            </div>
            <div class="consensus-header-section__subContent">
              <div class="title">{{ $t("pages.consensus.t1") }}</div>
              <ul>
                <li>{{ $t("pages.consensus.li1") }}</li>
                <li>{{ $t("pages.consensus.li2") }}</li>
              </ul>
            </div>
          </div>
          <!--<div class="header-section__graphic hide-sml">
              <img src="../assets/images/smart-wallet.png" alt="" />
          </div>-->
        </div>
      </div>
    </div>
    <!-- .section end -->

    <div class="section" ref="con1ref">
      <div class="section__content content-container">
        <div class="consensus__row">
          <div class="consensus__menu">
            <nav class="pagenav" :class="{ fixed: isFixed }">
              <a :class="{ active: navIndex === 0 }" @click="onClickNav(0)">{{
                $t("pages.consensus.q1T")
              }}</a>
              <a :class="{ active: navIndex === 1 }" @click="onClickNav(1)">{{
                $t("pages.consensus.q2T")
              }}</a>
              <a :class="{ active: navIndex === 2 }" @click="onClickNav(2)">{{
                $t("pages.consensus.q3T")
              }}</a>
              <a :class="{ active: navIndex === 3 }" @click="onClickNav(3)">{{
                $t("pages.consensus.q4T")
              }}</a>
            </nav>
          </div>
          <div class="consensus__content">
            <div id="id1" ref="content1" class="consensus__content-item">
              <div class="consensus__content-title">
                {{ $t("pages.consensus.q1T") }}
              </div>
              <div
                class="consensus__content-p"
                v-for="item in $t('pages.consensus.q1A')"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
            <div id="id2" ref="content2" class="consensus__content-item">
              <div class="consensus__content-title">
                {{ $t("pages.consensus.q2T") }}
              </div>
              <div
                class="consensus__content-p"
                v-for="item in $t('pages.consensus.q2A')"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
            <div id="id3" ref="content3" class="consensus__content-item">
              <div class="consensus__content-title">
                {{ $t("pages.consensus.q3T") }}
              </div>
              <div
                class="consensus__content-p"
                v-for="item in $t('pages.consensus.q3A')"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
            <div id="id4" ref="content4" class="consensus__content-item">
              <div class="consensus__content-title">
                {{ $t("pages.consensus.q4T") }}
              </div>
              <div
                class="consensus__content-p"
                v-for="item in $t('pages.consensus.q4A')"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .section end -->
  </div>
  <!-- .view-container end -->
</template>

<script lang="ts">
/*eslint-diable*/
export default {
  name: "consensus",
  data() {
    return {
      isFixed: false,
      navIndex: 0,
      navBoxState: true //点击导航栏时，暂时停止监听页面滚动
    };
  },
  mounted() {
    let timeId;
    window.addEventListener(
      "scroll",
      () => {
        // 页面滚动停止100毫秒后才会执行下面的函数。
        clearTimeout(timeId);
        timeId = setTimeout(() => {
          this.handleScroll();
        }, 100);
      },
      true
    );
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      if (
        this.currentScroll >= this.$refs.con1ref.offsetTop + 20 &&
        this.currentScroll <= this.$refs.con1ref.offsetHeight
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
      if (this.navBoxState) {
        const refArray = [
          { ref: "content1", active: "menu1" },
          { ref: "content2", active: "menu2" },
          { ref: "content3", active: "menu3" },
          { ref: "content4", active: "menu4" }
        ];
        refArray.forEach((r, i) => {
          this.gdjz(r.ref, 50, () => {
            this.navIndex = i;
          });
        });
      }
    },
    onClickNav: function(index) {
      this.$el.querySelector(`#id${index + 1}`).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start" // 上边框与视窗顶部平齐。默认值
      });

      this.navIndex = index;
      this.navBoxState = false;

      let timeId;
      clearTimeout(timeId);
      timeId = setTimeout(() => {
        this.navBoxState = true;
      }, 500);
    },
    gdjz(div, offset, callback) {
      const dom = this.$refs[div]; // 等同于document.querySelector('.earth') true
      const box = this.$refs.con1ref.offsetTop;
      if (dom) {
        let b, c, d;
        d = dom.offsetTop; // 元素距离相对父级的高度，这里父级指的是body
        c = dom.offsetHeight;
        b =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop; //  获取窗口滚动条高度
        if (b > box + d - offset && b < box + d + c) {
          callback && callback();
        }
      }
    }
  }
};
</script>
