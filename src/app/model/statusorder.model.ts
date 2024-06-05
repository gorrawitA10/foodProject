// To parse this data:
//
//   import { Convert } from "./file";
//
//   const statusOrder = Convert.toStatusOrder(json);

export interface StatusOrder {
  sid:  number;
  name: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toStatusOrder(json: string): StatusOrder[] {
      return JSON.parse(json);
  }

  public static statusOrderToJson(value: StatusOrder[]): string {
      return JSON.stringify(value);
  }
}
