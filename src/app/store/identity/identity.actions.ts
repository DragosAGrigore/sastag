import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User, UserCredentials } from "../../admin/model/model";

export const IdentityActions = createActionGroup({
  source: 'Identity',
  events: {
    logIn: props<UserCredentials>(),
    logInSuccess: props<User>(),
    logInError: props<{ error: any }>(),
    logOut: emptyProps()
  }
});
