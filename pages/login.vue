<script setup lang="ts">
  definePageMeta({
    middleware: ['auth']
  })

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

  const user = useSupabaseUser()

  onMounted(() => {
    watchEffect(() => {
      if (!user.value) {
        navigateTo('/login')
      } else {
        navigateTo('/')
      }
    })
  })
</script>

<template>
  <!-- <div>
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
  </div> -->
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">黒澤 映画館</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
      </p>
    </div>
  </div>
</template>