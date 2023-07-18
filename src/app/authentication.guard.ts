import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  
  
 if(localStorage.getItem('token')){
  return true
 }else{
  var router:Router = new Router();
  router.navigateByUrl('/pagenotfound');
  var router: Router = new Router();
  router.navigateByUrl('/login')
  alert('login first')
  return false
 }


};
