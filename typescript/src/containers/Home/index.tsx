import * as React from "react";
import {connect} from "react-redux";

import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./action";
import Button from 'antd/lib/button';
import Table from 'antd/lib/Table';

import {IHomeModel} from './interface';

interface IStateProps {
  HomeReducers?: IHomeModel;
}

interface IDispatchProps {
    actions?:any
}

interface IDoctorContainerProps extends IStateProps, IDispatchProps {
}

const mapStateToProps = (state:IStateProps, ownProps) => {
    return Object.assign({}, ownProps, {
        HomeReducers:state.HomeReducers
    })
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return Object.assign({}, {
        actions:bindActionCreators<any>(actions, dispatch)
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(class extends React.Component<IDoctorContainerProps> {
    constructor(props:IDoctorContainerProps, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.actions.getData();
    }

    render() {
        const {HomeReducers:{list}} = this.props;

        return (
            <div>
                <a href="#/detail">to detail</a>
                <Button onClick={this.handleClick}>Home Button</Button>

                {this.renderInfo(list)}
            </div>
        )
    }

    renderInfo(list) {
        if (!list) return <div>暂无数据</div>;


        return (
            <table>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       list.map((v, k) => {
                           return (
                               <tr key={k}>
                                   <td>{v.id}</td>
                                   <td>{v.name}</td>
                                   <td>{v.age}</td>
                                   <td>
                                       <a href={`#/detail/${v.id}`}>详情</a>
                                   </td>
                               </tr>
                           );
                       })
                    }
                </tbody>
            </table>
        );
    }

    handleClick(e:React.MouseEvent<HTMLAnchorElement>) {
        this.props.actions.getData();
        console.log(e);
    }
});