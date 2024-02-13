<template>
  <div class="container">
    <appHeader></appHeader>
    <hr />
    <div class="row">
      <appServerStatus></appServerStatus>
      <appServerDetail></appServerDetail>
    </div>
    <hr />
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import Status from "./components/server/ServerStatus.vue";
import Details from "./components/server/ServerDetails.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appServerStatus: Status,
    appServerDetail: Details,
  },
};
</script>

<style></style>
