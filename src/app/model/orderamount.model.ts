// To parse this data:
//
//   import { Convert } from "./file";
//
//   const orderAmount = Convert.toOrderAmount(json);

export interface OrderAmount {
  oid:    number;
  fid:    number;
  amount: number;
  price:  number;
  pic:    string;
  name:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrderAmount(json: string): OrderAmount[] {
      return JSON.parse(json);
  }

  public static orderAmountToJson(value: OrderAmount[]): string {
      return JSON.stringify(value);
  }
}
