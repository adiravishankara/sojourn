export interface ProfileTable {
  Row: {
    account_type: string | null
    avatar_url: string | null
    created_at: string
    email: string | null
    full_name: string | null
    id: string
    last_location_update: string | null
    latitude: number | null
    longitude: number | null
    updated_at: string
  }
  Insert: {
    account_type?: string | null
    avatar_url?: string | null
    created_at?: string
    email?: string | null
    full_name?: string | null
    id: string
    last_location_update?: string | null
    latitude?: number | null
    longitude?: number | null
    updated_at?: string
  }
  Update: {
    account_type?: string | null
    avatar_url?: string | null
    created_at?: string
    email?: string | null
    full_name?: string | null
    id?: string
    last_location_update?: string | null
    latitude?: number | null
    longitude?: number | null
    updated_at?: string
  }
}

export interface FavoriteLocationTable {
  Row: {
    id: string
    user_id: string | null
    nickname: string
    address: string
    latitude: number | null
    longitude: number | null
    created_at: string
    updated_at: string
  }
  Insert: {
    id?: string
    user_id?: string | null
    nickname: string
    address: string
    latitude?: number | null
    longitude?: number | null
    created_at?: string
    updated_at?: string
  }
  Update: {
    id?: string
    user_id?: string | null
    nickname?: string
    address?: string
    latitude?: number | null
    longitude?: number | null
    created_at?: string
    updated_at?: string
  }
}