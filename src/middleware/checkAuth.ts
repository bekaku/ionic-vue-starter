import { LocalStorageAtt } from "@/config/config";
import { UserCredential } from "@/interface/Common";
import Cookies from "js-cookie";

export default async (to: any, from: any, next: any) => {
  const getCurrentAuth = (): Promise<UserCredential | null> => {
    return new Promise((resove) => {
      const auth = Cookies.get(LocalStorageAtt.USER);
      resove(auth ? JSON.parse(auth) : null);
    });
  };
  const currentAuth = await getCurrentAuth();
  console.log("middleware/checkAuth.ts/CurrentAuth", currentAuth);
  console.log(`middleware/checkAuth.ts/from`, from);
  console.log(`middleware/checkAuth.ts/to`, to);
  if(currentAuth){
    next();
  }else{
    next("/auth/login");
  }
  
};
