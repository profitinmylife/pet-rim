<script setup lang="ts">
import { useLocationsStore } from '../../features'
import { onMounted } from 'vue'
import { LocationCard } from '../../entities'

const store = useLocationsStore()

onMounted(() => {
  store.fetchLocations()
})

const paginationUpdate = (value: number) => {
  store.fetchLocations(value)
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
          v-for="item in store.getLocations"
          :key="item.name"
          cols="12"
          sm="4"
      >
        <location-card
            :value="item"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
