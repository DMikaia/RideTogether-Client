"use server";

export const server = async () => {
  const serverUrl = process.env.SERVER_URL;

  return { serverUrl };
};
