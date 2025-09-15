export interface UserData {
    id: number;
    name: string;
    email: string;
    job: string;
    salary: Salary[];
    spending: Spending[];
}

export interface Salary {
    id: number;
    month: string;
    amount: number;
}

export interface Spending {
    id: number;
    name: string;
    totalAmount: number;
    itemList?: ItemList[];
    category: string;
}

export interface ItemList {
    id: number;
    name: string;
    amount: number;
    category: string;
}