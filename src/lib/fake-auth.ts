const STORAGE_KEY = "inblue-fake-account";
const ACTIVE_KEY = "inblue-active-account";

export type FakeAccount = {
  email: string;
  password: string;
  fullName?: string;
};

const defaultAccount: FakeAccount = {
  email: "demo@inblue.ai",
  password: "123456",
  fullName: "Người dùng Demo",
};

const isBrowser = typeof window !== "undefined";

const safeParse = (value: string | null): FakeAccount | null => {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as FakeAccount;
    if (parsed?.email && parsed?.password) {
      return parsed;
    }
  } catch (error) {
    console.warn("Failed to parse stored account", error);
  }
  return null;
};

export const getStoredAccount = (): FakeAccount => {
  if (!isBrowser) return defaultAccount;
  const stored = safeParse(window.localStorage.getItem(STORAGE_KEY));
  return stored ?? defaultAccount;
};

export const setStoredAccount = (account: FakeAccount) => {
  if (!isBrowser) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(account));
};

export const getActiveAccount = (): FakeAccount => {
  if (!isBrowser) return defaultAccount;
  const active = safeParse(window.localStorage.getItem(ACTIVE_KEY));
  if (active) return active;
  return getStoredAccount();
};

export const setActiveAccount = (account: FakeAccount) => {
  if (!isBrowser) return;
  window.localStorage.setItem(ACTIVE_KEY, JSON.stringify(account));
};

export const clearActiveAccount = () => {
  if (!isBrowser) return;
  window.localStorage.removeItem(ACTIVE_KEY);
};

export const resetToDefaultAccount = () => {
  if (!isBrowser) return;
  setStoredAccount(defaultAccount);
  setActiveAccount(defaultAccount);
};

export { defaultAccount };
