export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: Tables
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: Enums
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables = {
  appointments: AppointmentTable
  business_media: BusinessMediaTable
  business_users: BusinessUserTable
  businesses: BusinessTable
  favorite_locations: FavoriteLocationTable
  profiles: ProfileTable
  reviews: ReviewTable
  service_availability: ServiceAvailabilityTable
  services: ServiceTable
  transactions: TransactionTable
}

export type Enums = {
  service_category:
    | "beauty"
    | "health"
    | "home"
    | "automotive"
    | "education"
    | "fitness"
    | "other"
}