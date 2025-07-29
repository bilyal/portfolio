<script setup lang="ts">
import Card from '@/components/Card.vue'
import { JOBS } from '@/constants'
import { i18nKeys } from '@/i18n-keys'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { title } = i18nKeys.pages.workExperience
</script>

<template>
  <section class="p-6">
    <h1 class="text-3xl font-bold mb-4">{{ t(title) }}</h1>

    <div class="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
      <Card
        v-for="job in JOBS"
        :key="job.company"
        :title="job.company"
        :period="job.period"
        :description="job.description"
        :contribution="job.contribution"
        :tasks="job.tasks"
        :technologies="job.technologies"
      />
    </div>
  </section>
</template>
