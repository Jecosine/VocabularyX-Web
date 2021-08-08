import { ISection } from './Section'

interface IPlan {
  id: string,
  name: string,
  startTime: Date,
  endTime: Date,
  duration: number,
  sections: ISection[]
}
class Plan implements IPlan {
  id!: string
  name!: string
  startTime!: Date
  endTime!: Date
  duration!: number
  sections!: ISection[]
}
declare type IPlanList = IPlan[]

export {
  IPlan,
  IPlanList,
  Plan
}
