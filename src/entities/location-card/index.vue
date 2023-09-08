<script setup lang="ts">
import type {PropType} from "vue";
import {LocationType} from '../../shared'
import {computed} from 'vue'
import moment from 'moment'

const props = defineProps({
  value: {
    type: Object as PropType<LocationType>,
    required: true
  }
})

const formatDate = computed(() => moment(props.value?.created).format('MMM Do YY'))
</script>

<template>
    <v-card
        class="mx-auto my-12"
        max-width="374"
    >
      <v-card-item>
        <v-card-title>{{props.value.name}}</v-card-title>
        <v-card-subtitle>
          <span class="me-1">{{props.value.type}}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          Dimension: {{props.value.dimension}}
        </div>

        <div>Created: {{formatDate}}</div>
      </v-card-text>
    </v-card>
</template>
