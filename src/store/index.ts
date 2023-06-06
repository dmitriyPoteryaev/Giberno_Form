import { isActiveGenetalButtonStore } from "./isActiveGenetalButton";
import { OrdersStore } from "./orders";

export const orderStore = new OrdersStore();
export const GenetalButtonStore = new isActiveGenetalButtonStore();
