import { create } from 'zustand'

type AgreementKeys =
  | 'termsRequired'
  | 'privacyRequired'
  | 'ageRequired'
  | 'privacyOptional'
  | 'marketing'
  | 'sms'
  | 'email'

interface AgreementState {
  agreements: Record<AgreementKeys, boolean>
  toggle: (key: AgreementKeys) => void
  checkAll: () => void
  uncheckAll: () => void
  isAllChecked: boolean
  isRequiredChecked: boolean
}

const initialAgreements: Record<AgreementKeys, boolean> = {
  termsRequired: false,
  privacyRequired: false,
  ageRequired: false,
  privacyOptional: false,
  marketing: false,
  sms: false,
  email: false
}

export const useSignupAgreementStore = create<AgreementState>((set, get) => ({
  agreements: { ...initialAgreements },
  toggle: key =>
    set(state => ({
      agreements: {
        ...state.agreements,
        [key]: !state.agreements[key]
      }
    })),
  checkAll: () =>
    set(() => ({
      agreements: Object.fromEntries(
        Object.keys(initialAgreements).map(k => [k, true])
      ) as Record<AgreementKeys, boolean>
    })),
  uncheckAll: () => set(() => ({ agreements: { ...initialAgreements } })),
  get isAllChecked() {
    const { agreements } = get()
    return Object.values(agreements).every(Boolean)
  },
  get isRequiredChecked() {
    const { agreements } = get()
    return (
      agreements.termsRequired &&
      agreements.privacyRequired &&
      agreements.ageRequired
    )
  }
}))
