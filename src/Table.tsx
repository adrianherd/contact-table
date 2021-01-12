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
                /* contact name, contact tags, deals, total value with currency and location */
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Tags</th>
                        <th>Deals</th>
                        <th>Total Value</th>
                        <th>Location</th>
                    </thead>
                    <tbody>
                        /* Definitely its own mini component would be helpful */
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
