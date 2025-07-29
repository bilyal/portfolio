<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { NAV_BTNS } from '@/constants'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Закрытие при переходе по маршруту
const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)

const { t } = useI18n()
const navItems = computed(() => NAV_BTNS)
</script>

<template>
  <div>
    <button
      @click="toggleMenu"
      class="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none z-50 cursor-pointer"
      aria-label="Toggle Menu"
    >
      <span
        class="absolute w-6 h-0.5 bg-text transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'rotate-45' : '-translate-y-2'"
      />
      <span
        class="absolute w-6 h-0.5 bg-text transition-opacity duration-300 ease-in-out"
        :class="isOpen ? 'opacity-0' : 'opacity-100'"
      />
      <span
        class="absolute w-6 h-0.5 bg-text transition-transform duration-300 ease-in-out"
        :class="isOpen ? '-rotate-45' : 'translate-y-2'"
      />
    </button>

    <!-- Меню с маской -->
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-40 flex" @click="toggleMenu">
        <!-- Маска -->
        <div class="absolute inset-0 bg-background transition-colors"></div>

        <!-- Контейнер меню -->
        <div
          class="relative flex flex-col flex-grow justify-center items-center space-y-6 px-4"
          @click.stop
        >
          <!-- Навигация -->
          <ul class="flex flex-col items-start space-y-4 mt-8">
            <router-link
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="flex items-center space-x-2 text-xl px-4 py-2 rounded transition text-text"
            >
              <component :is="item.icon" class="w-6 h-6" />
              <span>{{ t(item.name) }}</span>
            </router-link>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
