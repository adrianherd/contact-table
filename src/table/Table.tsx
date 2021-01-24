import React, { Component, ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import {
    ContactEntity,
    Contact,
    ContactTag,
    Deal,
    Tag,
    MetaInfo
} from "../types"

interface DataRes {
    contactTags: ContactTag[];
    deals: Deal[];
    contacts: Contact[];
    tags: Tag[];
    meta: MetaInfo;
}
type TableState = ContactEntity[];
export class Table extends Component<{}, TableState> {
    constructor(props: {}) {
        super(props);
        this.state = [];
    }
    componentDidMount() {
        fetch("api/3/contacts?status=-1&orders[email]=ASC&include=deals,contactTags.tags", {
            'method': 'GET',
            'headers': {
                'Api-Token': `${process.env.REACT_APP_API_TOKEN}`
            }
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            //this.setState(data);
        });
    }

    transformData(data: DataRes): ContactEntity[] {
        return [];
    }

    render() {
        return (
            <div className="">
                {/* contact name, contact tags, deals, total value with currency and location */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tags</th>
                            <th>Deals</th>
                            <th>Total Value</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Definitely its own mini component would be helpful */}
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

type TableRowProps = ContactEntity;
export class TableRow extends Component<TableRowProps> {
    constructor(props: TableRowProps) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
            </tr>
        )
    }
}
