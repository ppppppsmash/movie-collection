<script setup lang="ts">
  import type { Movie } from '@/types/Movie'

  const props = defineProps({
    movie: {
      type: Object as PropType<Movie>
    }
  })

  const config = useRuntimeConfig()
  const imgURL = computed(() => props.movie?.poster_path != null ?
  `${config.public.imgBaseUrl}/${props.movie.poster_path}` :
  `https://via.placeholder.com/300x500`
)
</script>

<template>
  <div class="h-128 w-64 border flex flex-col text-center">
    <NuxtLink 
      class="mb-5 bg-gray-900 inline-block w-full"
      :to="`/movies/${movie?.id}`"
    >
      <img
        class=" w-full transform hover:translate-x-6 hover:-translate-y-6
          delay-50 duration-100 inline-block"
        :src="imgURL"
        alt="映画ポスター"
      />
    </NuxtLink>
    <div class="text-lg">
      {{ movie?.title }}
    </div>

    <p class="text-m text-gray-500 break-words text-wrap truncate
      overflow-hidden px-2">
      {{ movie?.overview }}
    </p>
  </div>
</template>