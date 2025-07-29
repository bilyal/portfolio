<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TechItem from './TechItem.vue'

const { t, tm } = useI18n()

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    contribution: string
    tasks: string
    link?: string
    technologies?: string[]
    period?: string
  }>(),
  {
    technologies: () => [],
  },
)

const tasks = computed(() => tm(props.tasks) as string[])
const showTasks = computed(() => !!tasks.value.length)
</script>

<template>
  <div
    class="rounded-lg p-5 border shadow-sm bg-card text-text border-border transition-colors duration-300 flex flex-col justify-between"
  >
    <div>
      <p class="text-xs text-gray-500">{{ t(period!) }}</p>

      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <div class="mb-4 text-sm whitespace-pre-line">
        <div>{{ t(description) }}</div>
        <br />
        <div>{{ t(contribution) }}</div>
        <ul class="mt-4 flex flex-col gap-2" v-if="showTasks">
          <li
            v-for="(task, index) in tasks"
            :key="index"
            class="px-2 py-1 bg-button rounded-sm border border-border"
          >
            {{ task }}
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <TechItem v-for="tech in technologies" :key="tech" :text="tech" />
    </div>
  </div>
</template>
