export enum XhrStatus {
  initial,
  pending,
  success,
  error
}

export interface XhrStatusState {
  status: XhrStatus
}

export interface SimpleXhrState<T> extends XhrStatusState {
  data: T | null,
  error: any
}

export interface XhrState<T, K = any> extends SimpleXhrState<T>{
  request: K,
}

export function getInitialState<T>(): SimpleXhrState<T> {
  return {
    status: XhrStatus.initial,
    data: null,
    error: null
  }
}
