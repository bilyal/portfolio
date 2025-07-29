<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const isSending = ref(false)

function onSubmit() {
  if (!name.value || !email.value || !message.value) {
    alert('Пожалуйста, заполните все поля.')
    return
  }

  isSending.value = true

  // Симуляция отправки
  setTimeout(() => {
    alert(`Спасибо, ${name.value}! Ваше сообщение отправлено.`)
    name.value = ''
    email.value = ''
    message.value = ''
    isSending.value = false
  }, 1500)
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="contact-form max-w-md mx-auto p-6 zinc-800-bg rounded-lg shadow-md"
  >
    <h2 class="text-xl font-semibold mb-4 text-heading">Обратная связь</h2>

    <label class="block mb-2">
      <span class="text-text-primary">Имя</span>
      <input v-model="name" type="text" required placeholder="Ваше имя" class="input-field" />
    </label>

    <label class="block mb-2">
      <span class="text-text-primary">Email</span>
      <input
        v-model="email"
        type="email"
        required
        placeholder="example@mail.com"
        class="input-field"
      />
    </label>

    <label class="block mb-4">
      <span class="text-text-primary">Сообщение</span>
      <textarea
        v-model="message"
        required
        rows="4"
        placeholder="Ваше сообщение"
        class="input-field resize-none"
      ></textarea>
    </label>

    <button type="submit" class="btn-submit" :disabled="isSending">
      {{ isSending ? 'Отправка...' : 'Отправить' }}
    </button>
  </form>
</template>

<style scoped>
.contact-form {
  background-color: var(--color-card-bg);
  color: var(--color-text-primary);
}
.input-field {
  @apply w-full rounded-md border px-3 py-2 mt-1 mb-3 bg-background text-textPrimary border-card-border transition-colors duration-300;
  border-color: var(--color-card-border);
}
.input-field:focus {
  @apply outline-none ring-2 ring-button-bg;
  border-color: var(--color-button-bg);
}
.btn-submit {
  @apply bg-button-bg text-button-text font-semibold rounded-md px-6 py-2 cursor-pointer transition-colors duration-300;
  border: none;
}
.btn-submit:hover:not(:disabled) {
  background-color: var(--color-button-bg-hover);
}
.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
