import React, { Component, ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

type TableProps = {
}
export class Table extends Component<TableProps> {
    constructor(props: TableProps) {
        super(props);
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

type TableRowProps = {
}
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
