import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useCharactersStore } from './index.ts'
import { useClient } from 'villus'

describe('Test Characters store', () => {
  beforeEach(() => {
    useClient({
      url:'https://rickandmortyapi.com/graphql',
    })

    setActivePinia(createPinia())
  })

  test('Characters', async () => {

    const store = useCharactersStore()

    await store.fetchCharacters();

    expect(store.getCharacters).not.toBeUndefined()
  })
})
