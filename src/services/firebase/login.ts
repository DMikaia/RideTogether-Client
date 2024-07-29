import { firebaseApp } from "@/config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export async function signInWithEmailAndPass(
  email: string,
  password: string
): Promise<string | null> {
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
}
