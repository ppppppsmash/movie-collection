<script setup lang="ts">
  definePageMeta({
    layout: 'custom',
    middleware: ['auth']
  })

  const client = useSupabaseClient()

  const logOut = async () => {
    const { error } = await client.auth.signOut()
    navigateTo('/login')
  }
</script>

<template>
  <div>
    <button
      type="submit"
      @click="logOut()"
      class="p-2 text-white bg-green-500 rounded"
    >
      ログアウト
    </button>
  </div>
</template>