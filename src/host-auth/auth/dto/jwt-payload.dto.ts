 import { UserRoleEnum } from "src/host-auth/host/host.schema";
export interface JwtPayloadDto {
  username: string;
  role: UserRoleEnum;
  email: string;
}
