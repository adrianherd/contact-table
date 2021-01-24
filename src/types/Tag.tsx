export interface Tag {
    tagType:           string;
    tag:               string;
    description:       string;
    subscriber_count:  string;
    cdate:             Date;
    created_timestamp: Date;
    updated_timestamp: Date;
    created_by:        null;
    updated_by:        null;
    links:             TagLinks;
    id:                string;
}

export interface TagLinks {
    contactGoalTags: string;
}
