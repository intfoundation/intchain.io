<template>
  <div class="page-container" v-bind:class="{ navActive: navActive }">
    <div class="header">
      <div class="header__content content-container">
        <div class="header__logo">
          <router-link to="/"
            ><img
              src="./assets/images/int-logo-title.png"
              alt="INT"
              width="136"
              height="68"
          /></router-link>
        </div>
        <div class="nav" v-bind:class="{ 'nav--active': navActive }">
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/">{{ $t("pageLink.home") }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/applications">{{
              $t("pageLink.applications")
            }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/nodeplan">{{
              $t("pageLink.nodeplan")
            }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/consensus">{{
              $t("pageLink.consensus")
            }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/bsn">{{ $t("pageLink.bsn") }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/team">{{ $t("pageLink.team") }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/community">{{
              $t("pageLink.community")
            }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/contact">{{
              $t("pageLink.contact")
            }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/wallet">{{ $t("pageLink.wallet") }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/explorer">{{
              $t("pageLink.explorer")
            }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/grant">{{ $t("pageLink.grant") }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <a href="https://intbox.org" target="_blank">{{
              $t("pageLink.nft")
            }}</a>
          </div>

          <!--<div class="nav__item" @click="onClickNav()">
            <a href="https://roadpro.io" target="_blank">{{
              $t("pageLink.road")
            }}</a>
          </div>-->
          <div class="nav__item">
            <div id="lang-select" class="lang-select">
              <div
                class="lang-select__btn"
                v-for="entry in languages"
                :key="entry.title"
                @click="changeLocale(entry.language)"
              >
                {{ entry.title }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="nav-toggle"
          @click="navToggleOnClick()"
          v-bind:class="{ 'nav-toggle--active': navActive }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- #header end -->
    <router-view />
    <footer class="footer">
      <div class="footer__main">
        <div class="footer__col footer__col--left">
          <div class="footer__logo">
            <router-link to="/"
              ><img
                src="./assets/images/int-logo-title.png"
                alt="INT"
                width="100"
            /></router-link>
          </div>
          <div class="footer__title"></div>
          <div class="footer__social-media">
            <ul>
              <li class="">
                <a
                  href="https://discord.gg/T88VYsKU6S"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Discord_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://weibo.com/u/6358909246"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/weibo_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://t.me/INTChainOfficial"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Telegram_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://www.facebook.com/INTchainINT"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Facebook_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://twitter.com/INTCHAIN"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Twitter_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://www.reddit.com/r/INT_Chain/"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Reddit_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://steemit.com/@int-service"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/STeemit_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://medium.com/int-chain"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Medium_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://github.com/intfoundation"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Github_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://intchain.quora.com/"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Quora_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://bitcointalk.org/index.php?topic=4748651"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Bitcoin_talk_wh.png"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://www.coingecko.com/en/coins/intchain"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Coingecko_wh.svg"
                    alt=""
                    width="24"
                /></a>
              </li>
              <li class="">
                <a
                  href="https://coinmarketcap.com/currencies/int-chain/"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Coinmarketcap_wh.svg"
                    alt=""
                    width="24"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__col footer__col--right">
          <div class="footer__menu-wrapper">
            <!-- about -->
            <div class="footer__menu_block">
              <div class="footer__menu_caption">{{ $t("footer.about") }}</div>
              <ul class="footer__menu_list">
                <li class="footer__menu_item">
                  <a
                    href="https://www.youtube.com/watch?v=QDF0KqZFEq8"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.intVideo") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://medium.com/int-chain"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.blog") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <router-link to="/team">{{
                    $t("pageLink.team")
                  }}</router-link>
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://faq.intchain.io/intchain-faq/faq.html"
                    target="_blank"
                    rel="noopener"
                    >FAQ</a
                  >
                </li>
              </ul>
            </div>
            <!-- resources -->
            <div class="footer__menu_block">
              <div class="footer__menu_caption">
                {{ $t("footer.resources") }}
              </div>
              <ul class="footer__menu_list">
                <li class="footer__menu_item">
                  <a
                    href="https://explorer.intchain.io/"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.explorer3") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://wallet.intchain.io/"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.webWallet3") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://test.titansexplorer.intchain.io"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.testExplorer4") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://test.titanswallet.intchain.io"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.testWebWallet4") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://titansexplorer.intchain.io"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.mainExplorer4") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://blockscout.explorer.intchain.io"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.mainExplorer4Blockscout") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://titanswallet.intchain.io"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.mainWebWallet4") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    :href="$t('footer.whitepaperLink')"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.whitepaper") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://global.bsnbase.com"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.bsnLink") }}</a
                  >
                </li>
              </ul>
            </div>
            <!-- get involved -->
            <div class="footer__menu_block">
              <div class="footer__menu_caption">
                {{ $t("footer.getInvolved") }}
              </div>
              <ul class="footer__menu_list">
                <li class="footer__menu_item">
                  <router-link to="/nodeplan">{{
                    $t("pageLink.nodeplan")
                  }}</router-link>
                </li>
                <li class="footer__menu_item">
                  <router-link to="/community">{{
                    $t("pageLink.community")
                  }}</router-link>
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://github.com/intfoundation"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.gitHub") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    href="https://titanswallet.intchain.io/#/bridge"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.crossBridge") }}</a
                  >
                </li>
              </ul>
            </div>
            <!-- 4.0 -->
            <div class="footer__menu_block">
              <div class="footer__menu_caption">
                {{ $t("footer.guidelinesV4") }}
              </div>
              <ul class="footer__menu_list">
                <li class="footer__menu_item">
                  <a
                    :href="$t('footer.guidelinesLinks.mappingGuide')"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.guidelinesLabel.mappingGuide") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    :href="$t('footer.guidelinesLinks.metaMask')"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.guidelinesLabel.metaMask") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    :href="$t('footer.guidelinesLinks.imtoken')"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.guidelinesLabel.imtoken") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    :href="$t('footer.guidelinesLinks.nodeMigration')"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.guidelinesLabel.nodeMigration") }}</a
                  >
                </li>
                <li class="footer__menu_item">
                  <a
                    :href="$t('footer.guidelinesLinks.voting')"
                    target="_blank"
                    rel="noopener"
                    >{{ $t("footer.guidelinesLabel.voting") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部日期 -->
      <div class="footer__bottom">
        <div class="footer__bottom-info">
          <div class="footer__copyright">
            &copy; {{ year }} INT. {{ $t("footer.copyright") }}
          </div>
          <div>
            <router-link to="/disclaimer">{{
              $t("pageLink.disclaimer")
            }}</router-link>
            <router-link to="/riskstatement">{{
              $t("pageLink.riskstatement")
            }}</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import i18n from "@/plugins/i18n";

export default {
  name: "app",
  data() {
    return {
      navActive: false as boolean,
      year: "2017-" + new Date().getFullYear(),
      languages: [
        { flag: "en", language: "en", title: "En" },
        { flag: "zh_CN", language: "zhCN", title: "中" }
      ]
    };
  },
  methods: {
    changeLocale(locale: string) {
      i18n.locale = locale;
    },
    navToggleOnClick(): void {
      this.navActive = !this.navActive;
    },
    onClickNav(): void {
      this.navActive = false;
    }
  }
};
</script>

<style lang="scss">
.page-container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $contentPrimary;
  width: 100vw;
}

.header {
  height: $headerHeight;
  width: 100%;
  // position: absolute;
  background: $themeDark;
  display: flex;
  justify-content: center;

  @include mq-lrg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100vw;

    .navActive & {
      position: relative;
      height: 100vh;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    @include mq-lrg {
      display: block;

      .navActive & {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  &__logo {
    position: relative;
    width: 68px;
    height: 68px;

    a {
      width: 100%;
      height: 100%;
      display: block;
    }

    @include mq-lrg {
      position: absolute;
      left: 40px;
    }

    @include mq-med {
      position: absolute;
      left: 20px;
    }

    @include mq-sml {
      position: absolute;
      left: 16px;
    }
  }
}

.view-container {
  .navActive & {
    display: none;
  }
}

.nav {
  padding: 20px;
  margin-left: auto;
  display: flex;
  align-items: center;

  @include mq-lrg {
    padding-top: 60px;
    display: block;
    background: $themeDark;
    display: none;

    &--active {
      display: block;
    }
  }

  &__item {
    a {
      @include font-size(1.4);
      color: $contentLight;
      text-decoration: none;
      /*margin: 0 16px;*/
      margin: 0 12px;

      &:hover {
        text-decoration: none;
        color: $navHighlight;
      }

      @include mq-lrg {
        @include font-size(1.6);
        padding: 14px 40px;
        display: block;
        text-align: center;
      }

      &.router-link-exact-active {
        color: $navHighlight;
      }
    }
  }
}

.lang-select {
  display: flex;
  align-items: center;
  justify-content: center;

  @include mq-lrg {
    padding: 10px;
  }

  &__btn {
    cursor: pointer;
    color: $contentLight;
    border: 1px solid $divider;
    font-size: 10px;
    margin: 2px;
    display: inline-flex;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;

    @include mq-lrg {
      @include font-size(1.3);
      margin: 4px;
      height: 30px;
      width: 30px;
    }
  }
}

.nav-toggle {
  width: 40px;
  cursor: pointer;
  z-index: 6000;
  position: absolute;
  right: 24px;
  top: 17px;
  display: none;

  @include mq-lrg {
    display: block;
  }

  span {
    @include transition(background-color);
    @include transition(transform);
    transform-origin: 100% 3px;
    display: block;
    width: 100%;
    height: 6px;
    background-color: $highlight;
    margin-bottom: 8px;

    &:first-child {
      transform: rotate(0deg);
    }

    &:nth-child(2) {
      @include transition(opacity);
      opacity: 1;
    }

    &:last-child {
      transform: rotate(0deg);
      margin-bottom: 0;
    }
  }

  &--active {
    span {
      @include transition(transform);
      background-color: $highlight;

      &:first-child {
        transform: rotate(-44deg);
      }

      &:nth-child(2) {
        @include transition(opacity);
        opacity: 0;
      }

      &:last-child {
        transform: rotate(44deg);
        margin-bottom: 0;
      }
    }
  }
}
</style>
