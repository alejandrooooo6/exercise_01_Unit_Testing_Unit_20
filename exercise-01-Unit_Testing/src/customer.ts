import { AbstractCustomer } from "./abstract.customer.js";

export class Customer extends AbstractCustomer {
    private name: string;
    private type: 'regular' | 'vip' | 'business';

    constructor(name: string, type: 'regular' | 'vip' | 'business') {
        super(name, type);
        this.name = name;
        this.type = type;
    }

    public getDiscountRate(): number {
        if (this.type === 'vip') {
            return 0.50; 
        } else if (this.type === 'regular') {
            return 0.15;
        } else if (this.type === 'business') {
            return 0;    
        } else {
            return 0;  
        }
    }

    public getTaxRate(): number {
        if (this.type === 'business') {
            return 0.10; 
        } else if (this.type === 'regular' || this.type === 'vip') {
            return 0.21; 
        } else {
            return 0.21; 
        }
    }

    public getName(): string {
        return this.name;
    }
}