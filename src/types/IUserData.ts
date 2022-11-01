interface IProfile {
  '@collectinId': string
  '@collectinName': string
  avatar: string | null
  created: string
  id: string
  name: string
  updated: string
  userId: string
}

export interface IUser {
  id: string
  created: string
  updated: string
  email: string
  lastResetSentAt: string
  verified: boolean
  lastVerificationSentAt: string
  profile: IProfile
}

