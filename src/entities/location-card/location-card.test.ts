import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import {LocationCard} from './index.ts'
import { it, describe } from 'vitest'

describe("LocationCard.vue", () => {
  const vuetify = createVuetify()

  it("renders", () => {
    mount(LocationCard, {
      props: {
        value: {
          name: 'test name',
          type: 'test type',
          dimension: 'test dimension',
          created: 'test created'
        }
      },
      global: {
        plugins: [vuetify],
      },
    })
  });
});
