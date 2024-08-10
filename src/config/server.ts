export const server = () => {
  const serverUrl =
    process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:5000";

  return { serverUrl };
};
