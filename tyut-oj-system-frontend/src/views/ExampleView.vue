<template>
  <div class="home">
    <CodeEditor :handle-change="codeOnChange" :value="codeValue"></CodeEditor>
    <MdEditor :handle-change="mdOnChange" :value="mdValue"></MdEditor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue";

const mdValue = ref("");
const codeValue = ref("");

const mdOnChange = (v: string) => {
  mdValue.value = v;
};
const codeOnChange = (v: string) => {
  codeValue.value = v;
};
</script>
