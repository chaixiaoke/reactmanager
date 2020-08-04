import React from 'react';
import './index.less';
import { Input } from 'antd';
import { connect } from "react-redux";
import { changeTitle } from "../../redux/action";

const { Search } = Input;

class Home extends React.Component {

    handleChangeTitle = (value) => {
        const { dispatch } = this.props;
        dispatch(changeTitle(value));
    }

    render() {
        return (
            <div className="home-wrap">
                <Search placeholder="修改title"
                    enterButton="Search"
                    size="large"
                    loading="true"
                    style={{ width: 500 }}
                    onSearch={this.handleChangeTitle} />
                欢迎来到英雄联盟
            </div>
        )
    }
}

export default connect()(Home)