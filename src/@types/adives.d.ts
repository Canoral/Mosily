export interface IAdvices {
  id: number;
  language: string;
  advice_formula: string;
  advice_text: string;
  accountsAdvice: AccountsAdvice[];
}

export interface AccountsAdvice {
  id: number;
  id_account: number;
  status: string;
}
