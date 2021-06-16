import { CardBrand } from "./cardBrand";

export interface CreditCard {
  id: string;
  cardNumber: string;
  cardholderName: string;
  expirationDate: Date;
  cvvCode: number;
  cardBrand: CardBrand;
}