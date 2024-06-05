// To parse this data:
//
//   import { Convert } from "./file";
//
//   const basket = Convert.toBasket(json);

export interface Basket {
  bid:    number;
  cusid:  number;
  fid:    number;
  amount: number;
  price:  number;
  pic:    string;
  name:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBasket(json: string): Basket[] {
      return JSON.parse(json);
  }

  public static basketToJson(value: Basket[]): string {
      return JSON.stringify(value);
  }
}
