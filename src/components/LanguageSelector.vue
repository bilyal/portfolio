<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { LANGUAGES } from '@/constants'

const { locale } = useI18n()

const isOpen = ref(false)
const selectedLang = ref(locale.value)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node
  if (dropdownRef.value && !dropdownRef.value.contains(target)) {
    closeDropdown()
  }
}

const selectLanguage = (code: string) => {
  locale.value = code
  selectedLang.value = code
  localStorage.setItem('lang', code)
  closeDropdown()
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)

  const saved = localStorage.getItem('lang')
  if (saved) {
    locale.value = saved
    selectedLang.value = saved
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-1 p-2 rounded hover:bg-muted transition cursor-pointer"
      aria-label="Select Language"
    >
      <span>{{ LANGUAGES.find((l) => l.code === selectedLang)?.flag }}</span>
      <ChevronDownIcon class="w-4 h-4" />
    </button>

    <div v-if="isOpen" class="bg-button absolute right-0 mt-2 border-muted rounded shadow-lg z-10">
      <ul>
        <li v-for="lang in LANGUAGES" :key="lang.code">
          <button
            @click="selectLanguage(lang.code)"
            class="flex items-center space-x-2 w-full px-3 py-2 hover:bg-muted cursor-pointer"
          >
            <span>{{ lang.flag }}</span>
            <span>{{ lang.label }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
