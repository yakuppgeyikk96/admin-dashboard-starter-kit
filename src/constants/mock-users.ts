import { User } from "@/types/User";

export const MOCK_USERS: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    name: "Admin User",
    role: "admin",
    avatar: "/avatars/admin.jpg",
    createdAt: "2024-01-01",
    lastLogin: "2024-01-20T10:30:00Z",
  },
  {
    id: "2",
    email: "user@example.com",
    name: "Regular User",
    role: "user",
    avatar: "/avatars/user.jpg",
    createdAt: "2024-01-05",
    lastLogin: "2024-01-20T09:15:00Z",
  },
  {
    id: "3",
    email: "manager@example.com",
    name: "Manager User",
    role: "manager",
    avatar: "/avatars/manager.jpg",
    createdAt: "2024-01-10",
    lastLogin: "2024-01-20T08:45:00Z",
  },
];

// Demo credentials (login sayfasında göstereceğiz)
export const DEMO_CREDENTIALS = [
  { email: "admin@example.com", password: "admin123", role: "Admin" },
  { email: "user@example.com", password: "user123", role: "User" },
  { email: "manager@example.com", password: "manager123", role: "Manager" },
];
