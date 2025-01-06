export interface AppointmentTable {
  Row: {
    created_at: string
    end_time: string
    id: string
    service_id: string | null
    start_time: string
    status: string | null
    updated_at: string
    user_id: string | null
  }
  Insert: {
    created_at?: string
    end_time: string
    id?: string
    service_id?: string | null
    start_time: string
    status?: string | null
    updated_at?: string
    user_id?: string | null
  }
  Update: {
    created_at?: string
    end_time?: string
    id?: string
    service_id?: string | null
    start_time?: string
    status?: string | null
    updated_at?: string
    user_id?: string | null
  }
}