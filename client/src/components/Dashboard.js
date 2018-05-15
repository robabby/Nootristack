import React from 'react';
import { Link } from 'react-router-dom';
import StackList from './stacks/StackList';

import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { fullWhite } from 'material-ui/styles/colors';

const Dashboard = () => {
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="row">
        <RaisedButton
          label="Create New Stack"
          primary={true}
          href="stack/new"
          icon={<ContentAdd color={ fullWhite } />}
          className="right"
        />
      </div>
      <div className="row">
        <StackList />
      </div>
    </div>
  );
};

export default Dashboard;
