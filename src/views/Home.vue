<template>
  <div class="content-container">
    <a-row :gutter="16">
      <template-list :list="testData"></template-list>
    </a-row>
    <a-row type="flex" justify="center">
      <a-button
        type="primary"
        size="large"
        @click="loadMorePage"
        v-if="!isLastPage"
        :loading="isLoading"
        >加载更多</a-button
      >
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TemplateList from '../components/TemplateList.vue'
const testData = ref<any[]>([{ id: 0, author: '张三', copiedCount: 1000 }])
const isLoading = ref(false)
const { loadMorePage, isLastPage } = useLoadMore()
function useLoadMore() {
  const isLastPage = ref(false)
  const loadMorePage = async () => {}
  return {
    loadMorePage,
    isLastPage,
  }
}
</script>

<style>
.page-title {
  color: #fff;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
