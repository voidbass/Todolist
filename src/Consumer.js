import React from 'react';
import {AppContext} from './Provider.js';


class Consumer extends React.Component{
    render(){
        const {children} = this.props;
        return (
            <AppContext.Consumer>
                { (datas) => {
                    const dataNote = datas;
                    return React.Children.map(children, child =>
                        React.cloneElement(child, {dataNote})
                    );
                }}
            </AppContext.Consumer>
        );
    }
}

export default Consumer;