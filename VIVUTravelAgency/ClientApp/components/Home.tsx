import * as React from 'react';
import { RouteComponentProps } from 'react-router';

declare global {
    interface Window { lstMem: any }
}

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
                   <div>
                       <label>This is the home page!</label>
                   </div>
                   <div>
                       <label>List of members: </label>
                   </div>
                   {window.lstMem.map(ele => <label>{ele}</label>)}
               </div>;
    }
}
