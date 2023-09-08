import { createClient, VILLUS_CLIENT} from 'villus'
import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest'
import waitForExpect from 'wait-for-expect'
import CharacterPage from './index.ts'
import {useCharactersStore} from '../../features'
import { createTestingPinia } from '@pinia/testing'

import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  components,
  directives,
})

describe('Test Characters store', async () => {
  const wrapper = mount(CharacterPage, {
    global: {
      provide: {
        // @ts-ignore
        [VILLUS_CLIENT]: createClient({
          url: 'https://rickandmortyapi.com/graphql',
        }),
        plugins: [createTestingPinia(), vuetify],
      },
    },
  });

  test('Characters', async () => {
    const store = useCharactersStore()
    await store.fetchCharacters();

    expect(store.getCharacters).not.toBeUndefined()

    await waitForExpect(() => {
      expect(store.getCharacters).not.toBeUndefined()
      expect(wrapper.findAllComponents('div').length)
    });
  })
})

