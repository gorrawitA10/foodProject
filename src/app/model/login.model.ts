// To parse this data:
//
//   import { Convert } from "./file";
//
//   const login = Convert.toLogin(json);

export interface Login {
  lid:    number;
  uid:    number;
  status: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toLogin(json: string): Login[] {
      return JSON.parse(json);
  }

  public static loginToJson(value: Login[]): string {
      return JSON.stringify(value);
  }
}
