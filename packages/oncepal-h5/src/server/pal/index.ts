export type PaymentMethod = 0|1|2
export type PalLimits = {
        minAge: number;
        number: number;
        sex: number;
        [property: string]: any;
    
}
export type PalNeed = {
    creatorUserId: string;
    description: string;
    images?: string[];
    keywords: string;
    limits?: PalLimits;
    location?: string;
    paymentMethod: PaymentMethod;
    time?: string;
    [property: string]: any;
}

export function generatePalNeed():PalNeed{
    return {
        creatorUserId:'',
        description:'214214214124124214',
        keywords:'一起吃饭的',
        paymentMethod:0,
        
    }
}