import { CanMatchFn } from '@angular/router';

export const userGuard: CanMatchFn = (route, segments) => {
  return true;
};
