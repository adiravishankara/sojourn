export interface BusinessTable {
  Row: {
    address: string
    city: string
    created_at: string
    description: string | null
    email: string | null
    id: string
    latitude: number | null
    longitude: number | null
    name: string
    owner_id: string | null
    phone: string | null
    state: string
    updated_at: string
    website: string | null
    zip_code: string
  }
  Insert: {
    address: string
    city: string
    created_at?: string
    description?: string | null
    email?: string | null
    id?: string
    latitude?: number | null
    longitude?: number | null
    name: string
    owner_id?: string | null
    phone?: string | null
    state: string
    updated_at?: string
    website?: string | null
    zip_code: string
  }
  Update: {
    address?: string
    city?: string
    created_at?: string
    description?: string | null
    email?: string | null
    id?: string
    latitude?: number | null
    longitude?: number | null
    name?: string
    owner_id?: string | null
    phone?: string | null
    state?: string
    updated_at?: string
    website?: string | null
    zip_code?: string
  }
}

export interface BusinessMediaTable {
  Row: {
    id: string
    business_id: string | null
    media_url: string
    media_type: string
    description: string | null
    created_at: string
    updated_at: string
  }
  Insert: {
    id?: string
    business_id?: string | null
    media_url: string
    media_type: string
    description?: string | null
    created_at?: string
    updated_at?: string
  }
  Update: {
    id?: string
    business_id?: string | null
    media_url?: string
    media_type?: string
    description?: string | null
    created_at?: string
    updated_at?: string
  }
}

export interface BusinessUserTable {
  Row: {
    business_id: string | null
    created_at: string
    id: string
    role: string
    updated_at: string
    user_id: string | null
  }
  Insert: {
    business_id?: string | null
    created_at?: string
    id?: string
    role?: string
    updated_at?: string
    user_id?: string | null
  }
  Update: {
    business_id?: string | null
    created_at?: string
    id?: string
    role?: string
    updated_at?: string
    user_id?: string | null
  }
}