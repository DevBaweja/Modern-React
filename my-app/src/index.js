import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
    return (
        <div className="ui container large comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Yesterday at 5:20PM"
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 2:00AM"
                    content="I like the writing"
                    avatar={faker.image.avatar()}
                >
                    Hey There
                </CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to continue?
                </div>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
