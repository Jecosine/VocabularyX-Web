interface IWord {
  id: string,
  name: string,
  spell: string,
  pos: string,
  cn_etym: string,
  en_etym: string,
  sentence: string,
  phonetic: string,
  wordForms: string,
  audioSources: string,
  updated: number,
  raw: string,
  parsed: number
}

export { IWord }
