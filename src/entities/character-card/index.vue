<script setup lang="ts">
import type {PropType} from "vue";
import {CharacterType} from '../../shared'

const props = defineProps({
  value: {
    type: Object as PropType<CharacterType>,
    required: true
  }
})
</script>

<template>
    <v-card
        class="mx-auto my-12"
        max-width="374"
    >
      <v-img
          :src="props.value?.image ?? ''"
      />

      <v-card-item>
        <v-card-title>{{props.value.name}}</v-card-title>
        <v-card-subtitle>
          <span class="me-1">{{props.value.gender}}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          Status: {{props.value.status}}
        </div>

        <div>Species: {{props.value.species}}</div>
      </v-card-text>
    </v-card>
</template>
