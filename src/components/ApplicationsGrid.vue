<template>
  <div
    class="applications-grid"
    v-bind:class="{ 'applications-grid--spacing': spacing }"
  >
    <div class="applications-grid__item">
      <div class="applications-grid__graphic applications-grid__graphic--home">
        <div class="applications-grid__icon"><span></span></div>
      </div>
      <div class="applications-grid__title">
        {{ $t("components.applicationsGrid.listItems[0].title") }}
      </div>
      <div class="applications-grid__description">
        {{ $t("components.applicationsGrid.listItems[0].desc") }}
      </div>
    </div>
    <div class="applications-grid__item">
      <div class="applications-grid__graphic applications-grid__graphic--obd">
        <div class="applications-grid__icon"><span></span></div>
      </div>
      <div class="applications-grid__title">
        {{ $t("components.applicationsGrid.listItems[1].title") }}
      </div>
      <div class="applications-grid__description">
        {{ $t("components.applicationsGrid.listItems[1].desc") }}
      </div>
    </div>
    <div class="applications-grid__item">
      <div
              class="applications-grid__graphic applications-grid__graphic--nft"
      >
        <div class="applications-grid__icon"><span></span></div>
      </div>
      <div class="applications-grid__title">
        {{ $t("components.applicationsGrid.listItems[8].title") }}
      </div>
      <div class="applications-grid__description">
        {{ $t("components.applicationsGrid.listItems[8].desc") }}
      </div>
    </div>
    <div class="applications-grid__item">
      <div
              class="applications-grid__graphic applications-grid__graphic--smartfin"
      >
        <div class="applications-grid__icon"><span></span></div>
      </div>
      <div class="applications-grid__title">
        {{ $t("components.applicationsGrid.listItems[9].title") }}
      </div>
      <div class="applications-grid__description">
        {{ $t("components.applicationsGrid.listItems[9].desc") }}
      </div>
    </div>
      <div class="applications-grid__item">
          <div
                  class="applications-grid__graphic applications-grid__graphic--logistics"
          >
              <div class="applications-grid__icon"><span></span></div>
          </div>
          <div class="applications-grid__title">
              {{ $t("components.applicationsGrid.listItems[2].title") }}
          </div>
          <div class="applications-grid__description">
              {{ $t("components.applicationsGrid.listItems[2].desc") }}
          </div>
      </div>
    <template v-if="showFull">
      <div class="applications-grid__item">
        <div
                class="applications-grid__graphic applications-grid__graphic--transportation"
        >
          <div class="applications-grid__icon"><span></span></div>
        </div>
        <div class="applications-grid__title">
          {{ $t("components.applicationsGrid.listItems[3].title") }}
        </div>
        <div class="applications-grid__description">
          {{ $t("components.applicationsGrid.listItems[3].desc") }}
        </div>
      </div>
      <div class="applications-grid__item">
        <div
          class="applications-grid__graphic applications-grid__graphic--building"
        >
          <div class="applications-grid__icon"><span></span></div>
        </div>
        <div class="applications-grid__title">
          {{ $t("components.applicationsGrid.listItems[4].title") }}
        </div>
        <div class="applications-grid__description">
          {{ $t("components.applicationsGrid.listItems[4].desc") }}
        </div>
      </div>
      <div class="applications-grid__item">
        <div
          class="applications-grid__graphic applications-grid__graphic--parking"
        >
          <div class="applications-grid__icon"><span></span></div>
        </div>
        <div class="applications-grid__title">
          {{ $t("components.applicationsGrid.listItems[5].title") }}
        </div>
        <div class="applications-grid__description">
          {{ $t("components.applicationsGrid.listItems[5].desc") }}
        </div>
      </div>
      <div class="applications-grid__item">
        <div
          class="applications-grid__graphic applications-grid__graphic--security"
        >
          <div class="applications-grid__icon"><span></span></div>
        </div>
        <div class="applications-grid__title">
          {{ $t("components.applicationsGrid.listItems[6].title") }}
        </div>
        <div class="applications-grid__description">
          {{ $t("components.applicationsGrid.listItems[6].desc") }}
        </div>
      </div>
      <div class="applications-grid__item">
        <div
          class="applications-grid__graphic applications-grid__graphic--environment"
        >
          <div class="applications-grid__icon"><span></span></div>
        </div>
        <div class="applications-grid__title">
          {{ $t("components.applicationsGrid.listItems[7].title") }}
        </div>
        <div class="applications-grid__description">
          {{ $t("components.applicationsGrid.listItems[7].desc") }}
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ApplicationsGrid extends Vue {
  @Prop() private showFull!: boolean;
  @Prop() private spacing!: boolean;
}
</script>

<style scoped lang="scss"></style>
