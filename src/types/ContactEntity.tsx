import { Tag } from "./Tag";
import { Deal } from "./Deal";

export interface ContactEntity {
    contactName: string;
    contactTags?: Tag[];
    contactDeals?: Deal[];
    totalValue?: number;
    currency?: string;
    location?: string;
}
