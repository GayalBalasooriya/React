import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="June"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Saman"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Hemal"/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));