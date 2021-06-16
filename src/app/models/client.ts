import { Address } from "./address";
import { CreditCard } from "./creditCard";
import { Telefone } from "./telefone";

export interface Client {
  id: string;
  active: boolean;
  billing: Address[];
  shipping: Address[];
  creditCards: CreditCard[];
  email: string;
  password: string;
  gender: string;
  name: string;
  birthDate: Date;
  cpf: string;
  telefone: Telefone[];
  ranking: number;
}