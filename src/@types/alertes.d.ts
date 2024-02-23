export interface IAlerts {
  id: number;
  language: string;
  alert_formula: string;
  alert_text: string;
  accountsAlerts: AccountsAlert[];
}

export interface AccountsAlert {
  id: number;
  id_account: number;
  status: string;
}
