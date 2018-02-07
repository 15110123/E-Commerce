//ReSharper disable All
import * as React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "../../css/demo.css"

export class MaterialDatePicker extends React.Component<{ message: string, onDateChanged:any}, {}> {
    public constructor(prop: any) {
        super(prop);
    }

    public render() {
        return <div>
            <span>
                <label>{this.props.message}</label>
            </span>
            <MuiThemeProvider>
                <DatePicker hintText="Xin hãy nhấn vào đây" mode="landscape" className="demoDatePicker" onChange={this.DateChanged.bind(this)} />
            </MuiThemeProvider>
        </div>;
    }

    public DateChanged(o: undefined, date: object) {
        this.props.onDateChanged(date);
    }
}