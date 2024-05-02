<script setup lang="ts">
  const email = ref('')
  const password = ref('')
  const isSignUp = ref(false)
  const client = useSupabaseClient()

  const signUp = async () => {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value
    })

    console.log('user', data)
    console.log('error', error)
  }

  const login = async () => {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })

    console.log('user', data)
    console.log('error', error)
  }
</script>

<template>
  <div>
    <form
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      class="flex flex-col gap-2"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 bg-gray-600 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 bg-gray-600 rounded"
      />

      <button
        type="submit"
        class="p-2 text-white bg-green-500 rounded"
      >
        <span v-if="isSignUp"> 登録 </span>
        <span v-else> ログイン </span>
      </button>
    </form>

    <button
      @click="isSignUp = !isSignUp"
      class="w-full mt-8 text-sm text-center underline text-slate-300"
    >
      <span v-if="isSignUp"> アカウントを持っている？ </span>
      <span v-else> アカウントを作成 </span>
    </button>
  </div>
</template>