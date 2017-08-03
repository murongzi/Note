import React from "react";
import TabModel from "./model/tab.model";

interface ITabs {
    tabs:Array<TabModel>,
    hasMore:boolean
}

export default class Tabs extends React.Component<ITabs, any> {
    constructor(props:ITabs, context:any) {
        super(props, context);
    }

    render() {
        const {hasMore, tabs} = this.props;

        if (!tabs) return;

        return <div>
            <ul>
                {
                    tabs.map(function(v) {
                        return <li key={v.id}>{v.title}</li>
                    })
                }
            </ul>
        </div>
    }
}