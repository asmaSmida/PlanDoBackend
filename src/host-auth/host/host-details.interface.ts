import { UserRoleEnum } from "./host.schema";

export interface HostDetails {
    id: string;
    name: string;
    email: string;
    estate: string;
    telephone: string;
    region: string;
    role:UserRoleEnum
}