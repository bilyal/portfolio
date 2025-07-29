<script setup lang="ts">
import { CONTACT_EMAIL, CONTACT_GITHUB, CONTACT_LINKEDIN } from '@/constants'
import { i18nKeys } from '@/i18n-keys'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { contact, pages } = i18nKeys
const { title, description } = pages.contactMe
</script>

<template>
  <section class="p-6">
    <h1 class="text-2xl sm:text-3xl font-bold mb-6 text-text">
      {{ t(title) }}
    </h1>
    <p class="text-text mb-6">
      {{ t(description) }}
    </p>
    <div class="flex flex-col md:flex-row gap-4">
      <a
        :href="`mailto:${CONTACT_EMAIL}`"
        class="text-gray-700 hover:text-blue-700 flex gap-2 items-center"
        :aria-label="$t(contact.email)"
      >
        <Icon icon="mdi:email" class="w-5 h-5 inline-block" />
        <span>{{ t(contact.email) }}</span>
      </a>

      <a
        :href="CONTACT_GITHUB"
        target="_blank"
        class="text-gray-700 hover:text-blue-700 flex gap-2 items-center"
        aria-label="GitHub"
      >
        <Icon icon="mdi:github" class="w-5 h-5 inline-block" />
        <span>GitHub</span>
      </a>

      <a
        :href="CONTACT_LINKEDIN"
        target="_blank"
        class="text-gray-700 hover:text-blue-700 flex gap-2 items-center"
        aria-label="LinkedIn"
      >
        <Icon icon="mdi:linkedin" class="w-5 h-5 inline-block" />
        <span>LinkedIn</span>
      </a>
    </div>
  </section>
</template>
