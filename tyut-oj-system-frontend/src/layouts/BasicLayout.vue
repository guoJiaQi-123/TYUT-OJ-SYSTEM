<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <!--头-->
      <a-layout-header class="header">
        <GlobalHeader></GlobalHeader>
      </a-layout-header>

      <!--动态页面-->
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <!--页脚-->
      <a-layout-footer class="footer"> Tyut —— OJ在线判题系统 </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout .header {
  margin-bottom: 16px;
  padding: 14px;
}

#basicLayout .content {
  background: linear-gradient(
    to bottom right,
    red,
    orange,
    yellow,
    green,
    blue,
    purple
  );
  margin-bottom: 16px;
}

#basicLayout .footer {
  background: #aaa;
  margin-bottom: 16px;
  padding: 14px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
}
</style>
