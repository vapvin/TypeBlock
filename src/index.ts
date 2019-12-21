import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestemp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestemp + data).toString();

  static validatetructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestemp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestemp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestemp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestemp = timestemp;
  }
}
