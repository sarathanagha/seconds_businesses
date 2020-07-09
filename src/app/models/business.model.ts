export interface Business {
    license_number?: string;
    trade_name?: string;
    business_name?: string;
    street_address?: string;
    city?: string;
    state?: string;
    zip?: string;
    status?: string;
    date_issued?: Date;
    date_expired?: Date;
    location?: any;
    phone?: string;
}

export interface Columns {
    field: string;
    header: string;
}

export interface Businesses {
    businesses: Business[];
    cols: Columns[] 
    selectedBusiness: Business
    displayDetals: boolean
}