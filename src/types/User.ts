export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export type UserRole = "admin" | "user" | "manager";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
