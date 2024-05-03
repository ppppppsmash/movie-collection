<script setup lang="ts">
</script>

<template>
  <nav class="flex justify-center mt-10">
    <NuxtLink
      class="px-4 py-2 border rounded-lg text-black no-underline"
      to="/"
      active-class="font-bold"
    >
    トップ
    </NuxtLink>
    <NuxtLink
      class="px-4 py-2 border rounded-lg text-black no-underline"
      to="/mypage"
      active-class="font-bold"
    >
      マイページ
    </NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>