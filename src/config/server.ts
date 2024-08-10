"use server";

export const server = async () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  return { serverUrl };
};
