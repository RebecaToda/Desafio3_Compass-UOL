import { auth } from "../services/firebaseConfig";

export const getUserToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  if (user) {
    return await user.getIdToken();
  }
  return null;
};

export const isUserLoggedIn = async (): Promise<boolean> => {
  const token = await getUserToken();
  return token !== null;
};
