export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}
