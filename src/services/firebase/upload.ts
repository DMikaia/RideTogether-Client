import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./storage";

export const uploadFile = async (file: File, location: string) => {
  const fileName = `${file.name}`;

  const fileRef = ref(storage, `${location}/${fileName}`);

  const result = await uploadBytes(fileRef, file);

  return await getDownloadURL(result.ref);
};
