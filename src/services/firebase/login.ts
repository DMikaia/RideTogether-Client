import { firebaseApp } from "@/config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const auth = getAuth(firebaseApp);

export async function signInWithEmailAndPass(
  email: string,
  password: string
): Promise<string | null> {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userCredentials) {
      const accessToken = await userCredentials.user.getIdToken();

      return accessToken;
    }

    return null;
  } catch (error) {
    if (error instanceof FirebaseError) {
      return null;
    }
    throw error;
  }
}
