import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {MaterialDatePicker} from "./Demo/MaterialDatePicker";

declare global {
    interface Window { lstMem: any }
}

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public constructor() {
        super();
        this.selectedAlert.bind(this);
    }
    public render() {
        return <div>
                   <div>
                       <label>This is the home page!</label>
                   </div>
                   <div>
                       <label>List of members: </label>
                   </div>
                   {window.lstMem.map(ele => <label>{ele}</label>)}
                   <div>
                <MaterialDatePicker message="Xin hãy nhập ngày tháng năm sinh: " onDateChanged={this.selectedAlert}/>
                </div>
               </div>;
    }

    selectedAlert(selectedDate : string) {
        alert(selectedDate);
    }
}
