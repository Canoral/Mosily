export interface IContent {
  id: number;
  language: string;
  formula: string;
  text: string;
  accounts: Accounts[];
}

export interface Accounts {
  id: number;
  id_account: number;
  status: string;
}
