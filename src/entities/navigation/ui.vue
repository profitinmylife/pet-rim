<script setup lang="ts">
import {ref, watchEffect} from 'vue'
import router from '../../app/router'
import {useRoute} from 'vue-router'

const activeTab = ref(1)

const route = useRoute()

const tabs = [
  {
    id: 1,
    name: 'Characters',
    url: '/characters'
  },
  {
    id: 2,
    name: 'Locations',
    url: '/locations'
  },
  {
    id: 3,
    name: 'Episode',
    url: '/episodes'
  }
]

watchEffect(() => {
  activeTab.value = tabs.find((item) => item.url === route.path)?.id ?? 0
})

const changeUrl = ( value: number ) => {
  router.push(tabs[value-1].url)
}
</script>

<template>
  <v-card>
    <v-tabs
        v-model="activeTab"
        color="deep-purple-accent-4"
        align-tabs="center"
        @update:modelValue="changeUrl"
    >
      <v-tab
          v-for="item in tabs"
          :key="item.id"
          :value="item.id"
      >
        {{item.name}}
      </v-tab>
    </v-tabs>
  </v-card>
</template>
