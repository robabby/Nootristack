import React from 'react';
import { Link } from 'react-router-dom';
import StackList from './stacks/StackList';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <StackList />
      <div className="fixed-action-btn">
        <Link
          to="/stacks/new"
          className="btn-floating btn-large red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
