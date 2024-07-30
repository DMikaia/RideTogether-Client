import { firebaseApp } from "@/config/firebase";
import {
  confirmPasswordReset,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

export const passwordResetEmail = async (email: string): Promise<boolean> => {
  try {
    await sendPasswordResetEmail(auth, email);

    return true;
  } catch (error) {
    return false;
  }
};

export const changePassword = async (
  code: string,
  password: string
): Promise<boolean> => {
  try {
    await confirmPasswordReset(auth, code, password);

    return true;
  } catch (error) {
    return false;
  }
};
