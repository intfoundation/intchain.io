<template>
  <div class="count-down">
    <div class="count-down-container content-container">
      <div class="launch_title content-container">
        <span>{{ $t("pages.home.launchTitle") }}</span>
      </div>
      <div id="countdown" class="ClassyCountdownDemo"></div>
      <div class="launch_bottom">
        <a href="https://titansexplorer.intchain.io">https://titansexplorer.intchain.io</a>
        <a href="https://titanswallet.intchain.io">https://titanswallet.intchain.io</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import jQuery from "jquery";
window.jQuery = jQuery;
import "../lib/jquery.knob";
import { throttle } from "../lib/jquery.throttle";
import { Countdown } from "../lib/jquery.classycountdown";

throttle(window);
Countdown(jQuery);
export default {
  name: "CountDown",
  mounted() {
    $("#countdown").ClassyCountdown({
      end: "1629281880",
      now: Math.floor($.now() / 1000),
      labels: true,
      style: {
        element: "",
        textResponsive: 0.5,
        days: {
          gauge: {
            thickness: 0.03,
            bgColor: "rgba(255,255,255,0.05)",
            fgColor: "#1abc9c"
          },
          textCSS:
            "font-family: Open Sans; font-size:25px; font-weight:300; color:#fff;"
        },
        hours: {
          gauge: {
            thickness: 0.03,
            bgColor: "rgba(255,255,255,0.05)",
            fgColor: "#2980b9"
          },
          textCSS:
            "font-family: Open Sans; font-size:25px; font-weight:300; color:#fff;"
        },
        minutes: {
          gauge: {
            thickness: 0.03,
            bgColor: "rgba(255,255,255,0.05)",
            fgColor: "#8e44ad"
          },
          textCSS:
            "font-family: Open Sans; font-size:25px; font-weight:300; color:#fff;"
        },
        seconds: {
          gauge: {
            thickness: 0.03,
            bgColor: "rgba(255,255,255,0.05)",
            fgColor: "#f39c12"
          },
          textCSS:
            "font-family: Open Sans; font-size:25px; font-weight:300; color:#fff;"
        }
      },
      onEndCallback: function() {
        console.log("Time out!");
      }
    });
  }
};
</script>

<style>
.count-down {
  width: 100%;
  min-height: 850px;
  background: #171921;
  padding-top: 80px;
  padding-bottom: 40px;
  color: #ffffff;
}

.launch_title {
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
}

.launch_bottom {
  /*display: flex;*/
  /*justify-content: center;*/
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
}
.launch_bottom a {
  margin: 0 50px;
  text-decoration: none;
  color: #ffffff;
}

.launch_bottom a:hover {
  color: #e73737;
}

.count-down-container {
  margin: 0 auto;
}

.ClassyCountdownDemo {
  margin: 50px auto;
  max-width: 800px;
  width: calc(100%);
  padding: 30px;
  display: block;
}
.ClassyCountdown-wrapper > div {
  display: inline-block;
  position: relative;
  width: calc(25% - 20px);
  margin: 10px;
}

.ClassyCountdown-wrapper .ClassyCountdown-value {
  width: 100%;
  line-height: 1em;
  position: absolute;
  top: 50%;
  text-align: center;
  left: 0;
  display: block;
}
</style>
