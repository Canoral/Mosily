export interface ITips {
  id: number;
  language: string;
  tip_formula: string;
  tip_text: string;
  accountsTips: AccountsTip[];
}

export interface AccountsTip {
  id: number;
  id_account: number;
  status: string;
}
