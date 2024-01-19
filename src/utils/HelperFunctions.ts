import { NOT_SIGNED_IN_USER_USER_ID } from "./Constants";

export const doNothing = () => { }; // does nothing


export function isUserSignedIn(userId: number): boolean {
  if(!userId || userId === NOT_SIGNED_IN_USER_USER_ID) {
    return false;
  }
  return true;
}