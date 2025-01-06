export interface TransactionTable {
  Row: {
    id: string
    user_id: string | null
    service_id: string | null
    amount: number
    status: string
    payment_method: string | null
    created_at: string
    updated_at: string
  }
  Insert: {
    id?: string
    user_id?: string | null
    service_id?: string | null
    amount: number
    status: string
    payment_method?: string | null
    created_at?: string
    updated_at?: string
  }
  Update: {
    id?: string
    user_id?: string | null
    service_id?: string | null
    amount?: number
    status?: string
    payment_method?: string | null
    created_at?: string
    updated_at?: string
  }
}

export interface ReviewTable {
  Row: {
    id: string
    user_id: string | null
    business_id: string | null
    rating: number | null
    comment: string | null
    created_at: string
    updated_at: string
  }
  Insert: {
    id?: string
    user_id?: string | null
    business_id?: string | null
    rating?: number | null
    comment?: string | null
    created_at?: string
    updated_at?: string
  }
  Update: {
    id?: string
    user_id?: string | null
    business_id?: string | null
    rating?: number | null
    comment?: string | null
    created_at?: string
    updated_at?: string
  }
}