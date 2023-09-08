import {defineStore} from 'pinia'
import {useQuery} from 'villus'
import {LocationType, InfoType} from '../../shared'

const query = (page: number) => {
  return `
  query {
    locations(page: ${page}) {
      info {
        count
        pages
      }
      results {
        name
        type
        dimension
        created
      }
    }
  }`
}

const getLocations = async (page: number) => {
  const { data , isFetching, execute } = await useQuery({
    query: query(page)
  })

  return {
    data,
    isFetching,
    execute
  }
}

export const useLocationsStore = defineStore('locations', {
  state: () => ({
    locations : [] as LocationType[],
    info: {} as InfoType
  }),
  actions: {
    async fetchLocations(page: number = 1) {
      try {
        const response = await getLocations(page).then((result) => result.data?.value.locations)

        this.locations = response.results
        this.info = response.info
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getLocations: (state) => state.locations,
    getPages: (state) => state.info.pages
  }
})
