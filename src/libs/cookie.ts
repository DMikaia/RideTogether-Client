"use server";

import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const clearAllCookie = async () => {
  setCookie("session", "", new Date(0));
};

export const getSessionCookie = async () => {
  const seesionCookie = cookies().get("session");

  return seesionCookie;
};

const setCookie = async (name: string, value: string, expiration: Date) => {
  cookies().set(name, value, {
    expires: expiration,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
};

export const setAuthCookie = async (token: string, expiration: number) => {
  try {
    setCookie("session", token, new Date(Date.now() + expiration));
  } catch (error) {
    throw new Error("Something went wrong when creating the cookie");
  }
};

export const checkCookie = async (
  request: NextRequest,
  name: string
): Promise<RequestCookie | undefined> => {
  const Authorization = request.cookies.get(name);

  return Authorization;
};
