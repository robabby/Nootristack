import React from 'react';
import StackList from './stacks/StackList';

import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { fullWhite } from 'material-ui/styles/colors';

const Dashboard = () => {
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Dashboard</h2>
        <div>
          <RaisedButton
            label="Create New Stack"
            primary={true}
            href="stack/new"
            icon={<ContentAdd color={ fullWhite } />}
          />
        </div>
      </div>
      <div className="row">
        <StackList />
      </div>
    </div>
  );
};

export default Dashboard;
