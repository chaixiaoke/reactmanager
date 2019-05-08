import React from 'react'

export default class Info extends React.Component{
    render() {
        return(
            <div>
                这里是设置动态路由
                {this.props.match.params.mainId}
            </div>
        )
    }
}
