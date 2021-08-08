import { IPlanList } from '@/models/Plan'
import { dateGenerator } from '@/utils'

const planData = [
  {
    id: '114514',
    name: 'Plan 1',
    startTime: dateGenerator(2010, 1, 2, 3, 4, 5),
    endTime: dateGenerator(2010, 2, 2, 3, 4, 5),
    duration: 31
  },
  {
    id: '114515',
    name: 'Plan 2',
    startTime: dateGenerator(2010, 3, 2, 3, 4, 5),
    endTime: dateGenerator(2010, 4, 2, 3, 4, 5),
    duration: 31
  },
  {
    id: '114516',
    name: 'Plan 3',
    startTime: dateGenerator(2010, 4, 2, 3, 4, 5),
    endTime: dateGenerator(2010, 5, 2, 3, 4, 5),
    duration: 31
  }
] as IPlanList

const sectionData = [
  {
    id: '1919810',
    duration: 0,
    index: 1,
  },
  {
    id: '1919811',
    duration: 0,
    index: 2,
  },
  {
    id: '1919812',
    duration: 0,
    index: 3
  }
]
export {
  planData,
  sectionData
}
