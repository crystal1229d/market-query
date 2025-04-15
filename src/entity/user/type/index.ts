export type User = {
  gender: 'male' | 'female' | string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string

  id?: number
  firstName?: string
  lastName?: string
  maidenName?: string
  age?: number
  image?: string
  bloodGroup?: string
  height?: number
  weight?: number
  eyeColor?: string
  hair?: {
    color: string
    type: string
  }
  ip?: string
  address?: {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: {
      lat: number
      lng: number
    }
    country: string
  }
  macAddress?: string
  university?: string
  bank?: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  company?: {
    department: string
    name: string
    title: string
    address: {
      address: string
      city: string
      state: string
      stateCode: string
      postalCode: string
      coordinates: {
        lat: number
        lng: number
      }
      country: string
    }
  }
  ein?: string
  ssn?: string
  userAgent?: string
  crypto?: {
    coin: string
    wallet: string
    network: string
  }
  role?: 'admin' | 'moderator' | 'user' | string
}

export type SignupFormInput = {
  username: string
  password: string
  confirmPassword: string
  name: string
  phone: string
  gender: string
  emailId: string
  emailDomain: string
  birthYear: string
  birthMonth: string
  birthDay: string
}

export type UserCreatePayload = {
  username: string
  password: string
  name: string
  phone: string
  gender: string
  email: string
  birthDate: string
}
