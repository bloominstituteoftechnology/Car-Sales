import { dispatch } from "../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range";

// export types

export const REMOVE_ITEM = "REMOVE_ITEM";
export const BUY_ITEM = "BUY_ITEM";

export const removeItem = item => {
  console.log("remove test:", item);
  return { type: "REMOVE_ITEM", payload: item };
};

export const buyItem = item => {
  console.log("buy test:", item);
  return { type: "BUY_ITEM", payload: item };
};
