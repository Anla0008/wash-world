"use client";

import { useCallback } from "react";
import { User } from "@/types/user";

export function useAuth() {
  const baseUrl = "http://localhost:8080";

  // ===========================================================
  //                          SIGNUP
  // ===========================================================
  const signup = useCallback(async (params: User) => {
    const response = await fetch(baseUrl + "/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error("Failed to signup");
    }
  }, []);

  // ===========================================================
  //                          LOGIN
  // ===========================================================
  const login = useCallback(async (params: User) => {
    const response = await fetch(baseUrl + "/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }
  }, []);

  // Herunder returnerer vi ALLE routes, som vi ønsker at kunne bruge i vores komponenter
  return { signup, login };
}
