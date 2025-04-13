import { create } from 'zustand'

interface State {
  keyword: string
  setKeyword: (keyword: string) => void
  resetKeyword: () => void
}

export const useSearchStore = create<State>(set => ({
  keyword: '',
  setKeyword: keyword => set({ keyword }),
  resetKeyword: () => set({ keyword: '' })
}))
