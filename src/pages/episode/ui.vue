<script setup lang="ts">
import { useEpisodeStore } from '../../features'
import { onMounted } from 'vue'
import { EpisodeCard } from '../../entities'

const store = useEpisodeStore()

onMounted(() => {
  store.fetchEpisodes()
})

const paginationUpdate = (value: number) => {
  store.fetchEpisodes(value)
}
</script>

<template>
  <v-container>
    <v-pagination
        class="my-4"
        :total-visible="7"
        :length="store.info.pages"
        @update:modelValue="paginationUpdate"
    />
    <v-row no-gutters>
      <v-col
          v-for="item in store.getEpisodes"
          :key="item.name"
          cols="12"
          sm="4"
      >
        <episode-card
            :value="item"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
