export interface SpecificItemInOrder {
  name: string;
  description: string;
  amount: number;
}

export interface SpecificItemInOrderWiithSeparatePosition
  extends SpecificItemInOrder {
  separatePosition: boolean;
}

export interface BLOCKFORM_withWrapper {
  wrapperClassName: string;
}
