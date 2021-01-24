export interface Deal {
    hash:                string;
    owner:               string;
    contact:             string;
    organization:        null;
    group:               string;
    stage:               string;
    title:               string;
    description:         string;
    percent:             string;
    cdate:               Date;
    mdate:               Date;
    nextdate:            null;
    nexttaskid:          null;
    value:               string;
    currency:            string;
    winProbability:      null;
    winProbabilityMdate: null;
    status:              string;
    activitycount:       string;
    nextdealid:          string;
    edate:               null;
    links:               DealLinks;
    id:                  string;
    isDisabled:          boolean;
    account:             null;
    customerAccount:     null;
}

export interface DealLinks {
    dealActivities:      string;
    contact:             string;
    contactDeals:        string;
    group:               string;
    nextTask:            string;
    notes:               string;
    account:             string;
    customerAccount:     string;
    organization:        string;
    owner:               string;
    scoreValues:         string;
    stage:               string;
    tasks:               string;
    dealCustomFieldData: string;
}
