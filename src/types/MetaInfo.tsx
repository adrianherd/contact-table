export interface MetaInfo {
    total:      string;
    sortable:   boolean;
    page_input: PageInput;
}

export interface PageInput {
    segmentid:  number;
    formid:     number;
    listid:     number;
    tagid:      number;
    limit:      number;
    offset:     number;
    search:     null;
    sort:       null;
    seriesid:   number;
    waitid:     number;
    status:     number;
    forceQuery: number;
    cacheid:    string;
}
