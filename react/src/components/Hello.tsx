import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
export interface HelloStates { num: string }

declare global {
    interface Window {
        WBAPP: any;
    }
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, HelloStates> {
    list: {num: number};
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            num: '123' // 类型检查在代码编译通过后不在生效
        }
    }
    ChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        console.log(value, typeof value);
        this.setState({ num: value })
        this.list.num++; // Line 15

        console.log(window.WBAPP); // Line 6
    }

    render() {
        return <div>
            <input type="text" onChange={this.ChangeHandler} />
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <h1>Hello from {this.state.num}!</h1>
        </div>
    }
}