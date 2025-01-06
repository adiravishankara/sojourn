export interface ServiceTable {
  Row: {
    business_id: string | null
    category: string
    created_at: string
    description: string | null
    duration: unknown
    id: string
    name: string
    price: number
    updated_at: string
    image_url: string | null
  }
  Insert: {
    business_id?: string | null
    category: string
    created_at?: string
    description?: string | null
    duration: unknown
    id?: string
    name: string
    price: number
    updated_at?: string
    image_url?: string | null
  }
  Update: {
    business_id?: string | null
    category?: string
    created_at?: string
    description?: string | null
    duration?: unknown
    id?: string
    name?: string
    price?: number
    updated_at?: string
    image_url?: string | null
  }
}

export interface ServiceAvailabilityTable {
  Row: {
    id: string
    service_id: string | null
    day_of_week: string
    start_time: string
    end_time: string
    is_available: boolean | null
    created_at: string
    updated_at: string
  }
  Insert: {
    id?: string
    service_id?: string | null
    day_of_week: string
    start_time: string
    end_time: string
    is_available?: boolean | null
    created_at?: string
    updated_at?: string
  }
  Update: {
    id?: string
    service_id?: string | null
    day_of_week?: string
    start_time?: string
    end_time?: string
    is_available?: boolean | null
    created_at?: string
    updated_at?: string
  }
}