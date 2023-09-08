<script setup lang="ts">
import { useCharactersStore } from '../../features'
import {onMounted, ref} from 'vue'
import { CharacterCard } from '../../entities'

const store = useCharactersStore()

onMounted(() => {
  store.fetchCharacters()
})

const paginationUpdate = (value: number) => {
  store.fetchCharacters(value)
}

const searchText = ref('');

const searchCharacter = (value: string) => {
  store.fetchCharacters(1, value)
}
</script>

<template>
  <v-container>
    <v-text-field
        label="Поиск"
        variant="outlined"
        @change="searchCharacter($event.target.value)"
    />
    <v-pagination
        class="my-4"
        :total-visible="7"
        :length="store.info.pages"
        @update:modelValue="paginationUpdate"
    />
    <v-row no-gutters>
      <v-col
          v-for="item in store.getCharacters"
          :key="item.name"
          cols="12"
          sm="4"
      >
        <character-card
            :value="item"
            class="card"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
