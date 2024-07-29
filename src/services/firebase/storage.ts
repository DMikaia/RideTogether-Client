import { firebaseApp } from "@/config/firebase";
import { getStorage } from "firebase/storage";

const storage = getStorage(firebaseApp);

export { storage };
