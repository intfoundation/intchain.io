<template>
  <div class="view-container">
    <div class="section section--light">
      <div class="section__content section__content--hr-top content-container">
        <div class="section__title-container">
          <h2 class="section__title">{{ $t("pages.team.explorers") }}</h2>
        </div>
        <div class="explorers">
          <h3>INT Chain 3.0</h3>
          <div class="explorers_item">
            <a
              class="explorer"
              href="https://explorer.intchain.io"
              target="_blank"
            >
              <div class="explorer__logo">
                <img
                  src="../assets/images/explorers/int.png"
                  alt=""
                  width="100"
                />
              </div>
            </a>
            <a class="explorer" href="https://nodescan.io" target="_blank">
              <div class="explorer__logo">
                <img
                  src="../assets/images/explorers/nodescan.png"
                  alt=""
                  width="160"
                />
              </div>
            </a>
          </div>
          <h3>INT Chain 4.0</h3>
          <div class="explorers_item">
            <a
              class="explorer"
              href="https://titansexplorer.intchain.io"
              target="_blank"
            >
              <div class="explorer__logo">
                <img
                  src="../assets/images/explorers/int.png"
                  alt=""
                  width="100"
                />
                <span>Mainnet</span>
              </div>
            </a>
            <a
              class="explorer"
              href="https://test.titansexplorer.intchain.io"
              target="_blank"
            >
              <div class="explorer__logo">
                <img
                  src="../assets/images/explorers/int.png"
                  alt=""
                  width="100"
                />
                <span>Testnet</span>
              </div>
            </a>
            <a
              class="explorer"
              href="https://blockscout.explorer.intchain.io"
              target="_blank"
            >
              <div class="explorer__logo">
                <img
                  src="../assets/images/explorers/int.png"
                  alt=""
                  width="80"
                />
                <span>Blockscout <br/>Explorer</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Explorer"
};
</script>
