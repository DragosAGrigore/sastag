import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from "../../admin/model/model";
import { IdentityActions } from "./identity.actions";
import { getInitialState, SimpleXhrState, XhrStatus } from "../xhr.model";

export interface UserState extends SimpleXhrState<User>{}

export const initialState: UserState = getInitialState<User>();

export const identityFeature = createFeature({
  name: 'identity',
  reducer: createReducer(
    initialState,
    on(IdentityActions.logIn, (state) => ({
      ...state,
      status: XhrStatus.pending,
    })),
    on(IdentityActions.logInSuccess, (state, user) => ({
      ...state,
      data: user,
      error: null,
      status: XhrStatus.success
    })),
    on(IdentityActions.logInError, (state, { error }) => ({
      ...state,
      data: null,
      error,
      status: XhrStatus.error
    })),
    on(IdentityActions.logOut, (state) => ({
      ...state,
      data: null,
      error: null,
      status: XhrStatus.initial
    }))
  )
});
