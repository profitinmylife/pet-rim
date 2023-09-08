import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import {CharacterCard} from './index.ts'
import { it, describe } from 'vitest'

describe("CharacterCard.vue", () => {
  const vuetify = createVuetify()

  it("renders", () => {
    mount(CharacterCard, {
      props: {
        value: {
          name: 'test name',
          status: 'test status',
          species: 'test species',
          type: 'test type',
          gender: 'test gender',
          image: 'test image',
        }
      },
      global: {
        plugins: [vuetify],
      },
    })
  });
});
