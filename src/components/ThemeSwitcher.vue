<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const savedTheme = localStorage.getItem('theme')

  const themeIsDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

  if (themeIsDark && !isDark.value) {
    isDark.value = true
  }

  document.documentElement.classList.toggle('dark', themeIsDark)

  if (!savedTheme) {
    localStorage.setItem('theme', themeIsDark ? 'dark' : 'light')
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded hover:bg-muted transition cursor-pointer"
    aria-label="Toggle Theme"
  >
    <component :is="isDark ? MoonIcon : SunIcon" class="w-5 h-5" />
  </button>
</template>
