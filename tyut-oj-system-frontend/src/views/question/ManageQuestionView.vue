<template>
  <div id="manageQuestionView">
    <h2>题目管理</h2>
    <a-table
      :columns="columns"
      :data="dataList"
      :pagination="{
        pageSize: searchParams.pageSize,
        current: searchParams.pageNum,
        showTotal: true,
      }"
    >
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="doUpdate(record)">修改</a-button>
          <a-button status="danger" @click="doDelete(record)">删除</a-button>
        </a-space>
      </template>
    </a-table>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Question, QuestionControllerService } from "@/generated";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const dataList = ref([]);
const total = ref(0);
const searchParams = ref({
  pageSize: 10,
  pageNum: 1,
});
const loadData = async () => {
  const res = await QuestionControllerService.listQuestionByPageUsingPost(
    searchParams.value
  );
  if (res.code === 0) {
    dataList.value = res.data.records;
  } else {
    Message.error("加载失败，" + res.message);
  }
};
const show = ref(true);
onMounted(() => {
  loadData();
});
const columns = [
  {
    title: "题目ID",
    dataIndex: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  // {
  //   title: "内容",
  //   dataIndex: "content",
  // },
  {
    title: "标签",
    dataIndex: "tags",
  },
  // {
  //   title: "答案",
  //   dataIndex: "answer",
  // },
  {
    title: "提交数",
    dataIndex: "submitNum",
  },
  {
    title: "通过数",
    dataIndex: "acceptedNum",
  },
  // {
  //   title: "判题配置",
  //   dataIndex: "judgeConfig",
  // },
  // {
  //   title: "判题用例",
  //   dataIndex: "judgeCase",
  // },

  {
    title: "创建人ID",
    dataIndex: "userId",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    slotName: "optional",
  },
];
const doDelete = async (question: Question) => {
  const res = await QuestionControllerService.deleteQuestionUsingPost({
    id: question.id,
  });
  if (res.code === 0) {
    Message.success("删除成功");
    await loadData();
  } else {
    Message.error("操作失败" + res.message);
  }
};

const doUpdate = (question: Question) => {
  router.push({
    path: "/update/question",
    query: {
      id: question.id,
    },
  });
};
</script>
<style scoped>
#manageQuestionView {
}
</style>
