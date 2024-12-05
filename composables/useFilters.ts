export const useFilters = (): Filters => {
    const search = useState('search', () => '')
    const tags = useState('tags', () => [])
  
    return {
      search,
      tags
    }
  }


interface Filters {
  search: Ref<string>
  tags: Ref<string[]> 
}