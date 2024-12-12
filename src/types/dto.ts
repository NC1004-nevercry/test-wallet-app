export interface ITransaction {
  id: string;
  type: string;
  amount: number;
  transactionName: string;
  transactionDescription: string;
  date: string;
  pendingStatus: boolean;
  authorizedUser?: string;
  logo: {
    background: string;
    icon: React.ReactNode;
  };
}
