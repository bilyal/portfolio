<script setup lang="ts">
import TechItem from '@/components/TechItem.vue'
import { TECH_STACK } from '@/constants'
import { i18nKeys } from '@/i18n-keys'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { name, specialization, about } = i18nKeys.pages.home
const techStack = computed(() => TECH_STACK)
</script>

<template>
  <section class="p-6">
    <div class="flex items-center gap-4 mb-8">
      <img class="w-20 h-20 rounded-full" src="/src/assets/avatar.jpg" alt="" />
      <div class="font-medium dark:text-white">
        <div>{{ t(name) }}</div>
        <div class="text-sm text-gray-500">{{ t(specialization) }}</div>
      </div>
    </div>

    <div class="mb-4 whitespace-pre-line">{{ t(about) }}</div>
    <div class="mb-4 flex flex-col gap-2">
      <div class="flex flex-col" v-for="section in techStack" :key="section.label">
        <p class="mb-2">{{ `${t(section.label)}:` }}</p>
        <div class="flex flex-wrap gap-2">
          <TechItem v-for="(tech, index) in section.values" :key="index" :text="tech" />
        </div>
      </div>
    </div>
  </section>
</template>
