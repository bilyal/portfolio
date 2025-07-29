<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { NAV_BTNS } from '@/constants'

const { t } = useI18n()
const route = useRoute()

const navItems = computed(() => NAV_BTNS)
</script>

<template>
  <ul class="flex items-center space-x-2">
    <li v-for="item in navItems" :key="item.to">
      <RouterLink
        :to="item.to"
        class="flex items-center space-x-1 px-3 py-2 rounded hover:bg-button-hover transition"
        :class="{
          'bg-muted text-accent': route.path === item.to,
        }"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span class="hidden sm:inline">{{ t(item.name) }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<!-- <style>
.nav-link {
  @apply text-text-primary hover:text-button-bg;
}
</style> -->
