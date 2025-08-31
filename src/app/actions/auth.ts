"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MOCK_USERS } from "@/constants/mock-users";
import { User } from "@/types/User";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const mockPasswords = {
    "admin@example.com": "admin123",
    "user@example.com": "user123",
    "manager@example.com": "manager123",
  };

  const user = MOCK_USERS.find((u) => u.email === email);

  if (
    !user ||
    mockPasswords[email as keyof typeof mockPasswords] !== password
  ) {
    return { error: "Invalid credentials" };
  }

  const cookieStore = await cookies();
  cookieStore.set("auth_token", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
  redirect("/auth/login");
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token");

  if (!authToken) return null;

  const user = MOCK_USERS.find((u) => u.id === authToken.value);
  return user || null;
}
