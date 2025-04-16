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
  isAllChecked: boolean
  isRequiredChecked: boolean
  toggle: (key: AgreementKeys) => void
  toggleAll: () => void
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

const getIsAllChecked = (agreements: Record<AgreementKeys, boolean>) =>
  Object.values(agreements).every(Boolean)

const getIsRequiredChecked = (agreements: Record<AgreementKeys, boolean>) =>
  agreements.termsRequired &&
  agreements.privacyRequired &&
  agreements.ageRequired

export const useSignupAgreementStore = create<AgreementState>((set, get) => ({
  agreements: { ...initialAgreements },
  isAllChecked: false,
  isRequiredChecked: false,

  toggle: key =>
    set(state => {
      const updated = {
        ...state.agreements,
        [key]: !state.agreements[key]
      }

      return {
        agreements: updated,
        isAllChecked: getIsAllChecked(updated),
        isRequiredChecked: getIsRequiredChecked(updated)
      }
    }),

  toggleAll: () => {
    const current = get().agreements
    const nextState = getIsAllChecked(current) ? false : true

    const updated = Object.fromEntries(
      Object.keys(initialAgreements).map(key => [key, nextState])
    ) as Record<AgreementKeys, boolean>

    set({
      agreements: updated,
      isAllChecked: getIsAllChecked(updated),
      isRequiredChecked: getIsRequiredChecked(updated)
    })
  }
}))
