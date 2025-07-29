<script setup lang="ts">
import NavButtons from './NavButtons.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import LanguageSelector from './LanguageSelector.vue'
import MobileMenu from './MobileMenu.vue'
</script>

<template>
  <header class="bg-background sticky top-0 text-textPrimary border-b border-muted">
    <!-- <header class="bg-background text-textPrimary border-b border-muted"> -->
    <div class="flex justify-between items-center w-full py-3">
      <nav class="hidden md:flex items-center space-x-4">
        <NavButtons />
      </nav>

      <div class="md:hidden flex items-center">
        <MobileMenu />
      </div>

      <div class="flex items-center space-x-3">
        <ThemeSwitcher />
        <LanguageSelector />
      </div>
    </div>
  </header>
</template>
