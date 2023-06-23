import { HeightBlockStore } from "./heightBlock";
import { OrdersStore } from "./orders";
import { QrLinktsStore } from "./qrLink";

export const orderStore = new OrdersStore();

export const heightBlockStore = new HeightBlockStore();

export const qrLinktsStore = new QrLinktsStore();
