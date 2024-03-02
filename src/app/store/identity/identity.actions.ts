import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserCredentials } from "../../admin/model/user-credentials.model";
import { User } from "../../admin/model/user.model";

export const IdentityActions = createActionGroup({
  source: 'Identity',
  events: {
    logIn: props<UserCredentials>(),
    logInSuccess: props<User>(),
    logInError: props<{ error: any }>(),
    logOut: emptyProps()
  }
});
