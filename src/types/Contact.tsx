export interface Contact {
    cdate?:                 Date;
    email?:                 string;
    phone?:                 string;
    firstName?:             string;
    lastName?:              string;
    orgid?:                 string;
    orgname?:               string;
    segmentio_id?:          string;
    bounced_hard?:          string;
    bounced_soft?:          string;
    bounced_date?:          string;
    ip?:                    string;
    ua?:                    string;
    hash?:                  string;
    socialdata_lastcheck?:  string;
    email_local?:           string;
    email_domain?:          string;
    sentcnt?:               string;
    rating_tstamp?:         string;
    gravatar?:              string;
    deleted?:               string;
    anonymized?:            string;
    adate?:                 Date;
    udate?:                 Date;
    edate?:                 null;
    deleted_at?:            string;
    created_utc_timestamp?: Date;
    updated_utc_timestamp?: Date;
    created_timestamp?:     Date;
    updated_timestamp?:     Date;
    created_by?:            string;
    updated_by?:            string;
    email_empty?:           boolean;
    scoreValues?:           any[];
    accountContacts?:       any[];
    deals?:                 string[];
    contactTags?:           string[];
    links?:                 ContactLinks;
    id?:                    string;
    organization?:          null;
}

export interface ContactLinks {
    bounceLogs?:            string;
    contactAutomations?:    string;
    contactData?:           string;
    contactGoals?:          string;
    contactLists?:          string;
    contactLogs?:           string;
    contactTags?:           string;
    contactDeals?:          string;
    deals?:                 string;
    fieldValues?:           string;
    geoIps?:                string;
    notes?:                 string;
    organization?:          string;
    plusAppend?:            string;
    trackingLogs?:          string;
    scoreValues?:           string;
    accountContacts?:       string;
    automationEntryCounts?: string;
}
