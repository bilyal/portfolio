<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <span class="px-2 py-1 text-xs rounded-full bg-button text-text border border-border">
    {{ text }}
  </span>
</template>
