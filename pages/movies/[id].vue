<script setup lang="ts">
import type { Movie } from "@/types/Movie"

const route = useRoute()
const config = useRuntimeConfig()
const movieId = computed(() => route.params.id)
console.log(route)

const url = computed(() => {
    return `/api/movies/${movieId.value}`
  })

const { data } = await useFetch<Movie>(url)

console.log(data)
const imgURL = computed(() => data.value?.poster_path ?
  `${config.public.imgBaseUrl}/${data.value.poster_path}` : 
  'https://via.placeholder.com/300x500')
</script>

<template>
  <div class="flex flex-col px-20 mt-10">
    <div class="grid grid-cols-7 gap-1">
      <img
        class="col-span-2"
        :src="imgURL"
        alt=""
      />
      <div
        class="flex flex-col col-span-3"
      >
        <div class="text-4xl font-sans font-bold mb-5">
          {{ data?.title }}
        </div>
        <div class="flex">
          <div
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2 mb-2"
            v-for="genre in data?.genres"
          >
            {{ genre.name }}
          </div>
        </div>
        
        <div class="text-lg my-2">
          リリース日: {{ data?.release_date }}
        </div>

        <div class="text-lg mb-2">
          鑑賞時間の長さ: {{ data?.runtime }}分
        </div>
        <p class="text-gray-600 text-m">
          概要: {{ data?.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>

</style>