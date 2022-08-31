import { useQuery } from '@tanstack/react-query'
import { wait } from '@/utils/wait'

export const getExample = async () => {
  await wait(1000)

  return {
    data: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptas
    hic quo molestiae amet iure et necessitatibus tempore in vero, quidem
    similique sit! Sapiente illum incidunt distinctio itaque ut corporis.`,
  }
}

export const useQueryExample = () => {
  return useQuery({
    queryKey: ['example-data'],
    queryFn: () => getExample(),
  })
}
