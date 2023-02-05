export interface TodoData {
  id: string;
  title: string;
  description: string;
  date: number;
  done?: boolean;
  deleted?: boolean;
}
