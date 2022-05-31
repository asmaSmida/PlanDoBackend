import { StringifyOptions } from "querystring";

export interface EstateDetails {
  id: string;
  name: string;
  type: string;
  localisation: string;
  description: string;
  capacity: string;
  summary: string;
  amenities: string;
  image: string;
  piscine: boolean;
  restaurant: boolean;
  hammam: boolean;
  patrimoine: boolean;
  plage: boolean;
  randonnee: boolean;
  price: string;
}
