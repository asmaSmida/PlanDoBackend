import { UserRoleEnum } from "src/client-auth/user/user.schema";  
export interface JwtPayloadDto {
  username: string;
  role: UserRoleEnum;
  email: string;
}
