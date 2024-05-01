<script setup lang="ts">
  import type { APIResponse } from '@/types/APIResponse';

  const searchTerm = ref('')

  // const url = computed(() => {
  //   return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`
  // })

  // const { data } = await useFetch<APIResponse>(url)

</script>

<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">
        黒澤の映画コレクション
      </h2>
      <div class="flex justify-center items-center h-32">
        <input
          class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
          v-model="searchTerm"
          type="text"
          placeholder="映画を検索..."
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
        xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
        Movie Card
      </div>
    </div>
  </div>
</template>