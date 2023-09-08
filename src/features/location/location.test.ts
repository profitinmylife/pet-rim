import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useLocationsStore } from './index.ts'
import { useClient } from 'villus'

describe('Test Characters store', () => {
  beforeEach(() => {
    useClient({
      url:'https://rickandmortyapi.com/graphql'
    })

    setActivePinia(createPinia())
  })

  test('Characters', async () => {
    const store = useLocationsStore()

    await store.fetchLocations();

    expect(store.getLocations).not.toBeUndefined()
  })
})
