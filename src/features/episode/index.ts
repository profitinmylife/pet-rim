import { defineStore } from 'pinia'
import { useQuery } from 'villus'
import { EpisodeType, InfoType } from '../../shared'

const query = (page: number) => {
  return `
  query {
    episodes(page: ${page}) {
      info {
        count
        pages
      }
      results {
        name
        created
        air_date
      }
    }
  }`
}

const getEpisodes = async (page: number) => {
  const { data , isFetching, execute } = await useQuery({
    query: query(page)
  })

  return {
    data,
    isFetching,
    execute
  }
}

export const useEpisodeStore = defineStore('episode', {
  state: () => ({
    episodes : [] as EpisodeType[],
    info: {} as InfoType
  }),
  actions: {
    async fetchEpisodes(page: number = 1) {
      try {
        const response = await getEpisodes(page).then((result) => result.data?.value.episodes)

        this.episodes = response.results
        this.info = response.info
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getEpisodes: (state) => state.episodes,
    getPages: (state) => state.info.pages
  }
})
