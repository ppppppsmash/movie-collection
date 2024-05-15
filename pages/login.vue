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
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-theme">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">KUROSAWA MOVIE</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        @submit.prevent="() => (isSignUp ? signUp() : login())"
        class="space-y-6"
        action="#"
        method="POST"
      >
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900 text-white">Email address</label>
          <div class="mt-2">
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password"class="block text-sm font-medium leading-6 text-gray-900 text-white">Password</label>
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span v-if="isSignUp"> Registration </span>
            <span v-else> Sign in </span>
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        <a
          @click="isSignUp = !isSignUp"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
        >
          <span v-if="isSignUp">have an account?</span>
          <span v-else>create a account</span>
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.bg-theme::before {
  position: absolute;
  content: "";
  left: 30%;
  top: 20%;
  width: 450px;
  height: 450px;
  background: #17141d;
  border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
  will-change: border-radius, transform, opacity;
  animation: sliderShape 5s linear infinite;
  display: block;
  z-index: -1;
  -webkit-animation: sliderShape 5s linear infinite;
}

@keyframes sliderShape{
  0%,100%{
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  34%{
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform:  translate3d(0,5px,0) rotateZ(0.01deg);
  }
  50%{
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  67%{
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
    transform: translate3d(0,-3px,0) rotateZ(0.01deg);
  }
}
</style>