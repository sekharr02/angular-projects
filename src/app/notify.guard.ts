import { CanActivateFn } from '@angular/router';

export const notifyGuard: CanActivateFn = (route, state) => {

  if(confirm("if you go back your progress are not save! are you willing to go")){
  return true;
  }
  else{
    return false;
  }
};
