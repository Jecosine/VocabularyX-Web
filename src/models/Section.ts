import { IWord } from './Word'

interface ISection {
  id: string,
  index: number,
  duration: number,
  words?: IWord[]
}

export {
  ISection
}
