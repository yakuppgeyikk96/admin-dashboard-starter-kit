import { MOCK_USERS } from "@/constants/mock-users";
import { User } from "@/types/User";

export const mockLogin = async (
  email: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = MOCK_USERS.find((u) => u.email === email);

  if (!user) {
    return { success: false, error: "User not found" };
  }

  const mockPasswords = {
    "admin@example.com": "admin123",
    "user@example.com": "user123",
    "manager@example.com": "manager123",
  };

  if (mockPasswords[email as keyof typeof mockPasswords] !== password) {
    return { success: false, error: "Invalid password" };
  }

  return { success: true, user };
};

export const mockLogout = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
};
