export interface ContactTag {
    contact:           string;
    tag:               string;
    cdate:             Date;
    created_timestamp: Date;
    updated_timestamp: Date;
    created_by:        null;
    updated_by:        null;
    links:             ContactTagLinks;
    id:                string;
}

export interface ContactTagLinks {
    tag:     string;
    contact: string;
}
