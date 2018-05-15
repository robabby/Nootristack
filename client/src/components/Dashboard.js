import React from 'react';
import { Link } from 'react-router-dom';
import StackList from './stacks/StackList';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const Dashboard = () => {
  return (
    <div className="row" style={{ marginTop: '20px' }}>
      <StackList />
      <FloatingActionButton href="stack/new">
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
};

export default Dashboard;
