import { Profile, Credentials } from "./register";

export type RegisterStore = {
  steps: number;
  credentials: Credentials | null;
  updateCredentials: (credentials: Credentials) => void;
  incrementStep: () => void;
  clear: () => void;
};
