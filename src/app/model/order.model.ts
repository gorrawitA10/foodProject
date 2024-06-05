// To parse this data:
//
//   import { Convert } from "./file";
//
//   const order = Convert.toOrder(json);

export interface Order {
  oid:      number;
  cusid:    number;
  status:   number;
  sumprice: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrder(json: string): Order[] {
      return JSON.parse(json);
  }

  public static orderToJson(value: Order[]): string {
      return JSON.stringify(value);
  }
}
