<script setup lang="ts">
import {useClient} from 'villus'
import { Navigation } from '../entities'

useClient({
  url:'https://rickandmortyapi.com/graphql'
})
</script>

<template>
  <navigation />
  <RouterView/>
</template>
