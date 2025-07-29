<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div class="mx-auto w-full max-w-[800px] px-4 md:px-16 sm:px-12">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
