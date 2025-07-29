<script setup lang="ts">
import { i18nKeys } from '@/i18n-keys'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const { title, description, tasks, ownProjects } = i18nKeys.pages.myProjects
const items = computed(() => tm(tasks) as string[])
</script>

<template>
  <section class="p-6">
    <h1 class="text-2xl sm:text-3xl font-bold mb-6 text-textPrimary">
      {{ $t(title) }}
    </h1>

    <div class="mb-4 text-sm">
      <div>{{ $t(description) }}</div>
      <br />
      <ul class="flex flex-col gap-2">
        <li
          v-for="(task, index) in items"
          :key="index"
          class="px-2 py-1 rounded-sm bg-button text-text border border-border"
        >
          {{ task }}
        </li>
      </ul>
      <br />
      <div>{{ $t(ownProjects) }}</div>
    </div>
  </section>
</template>
