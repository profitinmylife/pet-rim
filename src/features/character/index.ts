import { defineStore } from 'pinia'
import { useQuery } from 'villus'
import { CharacterType, InfoType } from '../../shared'

const query = (page: number, name: string = '') => {
  const searchName = name.length > 0 ? `filter: { name: "${name}" }` : ''

  return `
      query { characters(page: ${page}, ${searchName}) {
        info {
          count 
          pages
          prev
          next
        }
        results {
          name
          status
          image
          species
          gender
          episode {
           name
          }
        }
      }}`
}

const getCharacters = async (page: number, name?: string) => {
  const { data , isFetching, execute } = await useQuery({
    query: query(page, name)
  })

  return {
    data,
    isFetching,
    execute
  }
}

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters : [] as CharacterType[],
    info: {} as InfoType
  }),
  actions: {
    async fetchCharacters(page: number = 1, name?: string) {
      try {
        const response = await getCharacters(page, name).then((result) => result.data?.value.characters)

        this.characters = response.results
        this.info = response.info
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getCharacters: (state) => state.characters,
    getPages: (state) => state.info.pages
  }
})
