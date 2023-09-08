import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import { EpisodeCard } from './index.ts'
import { it, describe } from 'vitest'

describe("EpisodeCard.vue", () => {
  const vuetify = createVuetify()

  it("renders", () => {
    mount(EpisodeCard, {
      props: {
        value: {
          name: 'test name',
          air_date: 'test date',
          episode: 'test episode',
          created: 'test created'
        }
      },
      global: {
        plugins: [vuetify],
      },
    })
  });
});
