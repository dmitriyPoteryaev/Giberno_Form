import { HeightBlockStore } from "./heightBlock";
import { OrdersStore } from "./orders";

export const orderStore = new OrdersStore();

export const heightBlockStore = new HeightBlockStore();
