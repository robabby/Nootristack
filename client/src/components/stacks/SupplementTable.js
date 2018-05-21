import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class SupplementTable extends Component {
  state = {
    selected: [],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  renderData() {
    return this.props.data.map((supplement, index) => {
      return (
        <TableRow key={supplement._id} selected={this.isSelected(index)}>
          <TableRowColumn>{supplement.title}</TableRowColumn>
          <TableRowColumn>{supplement.quantity}</TableRowColumn>
          <TableRowColumn>{supplement.bottleSize}</TableRowColumn>
          <TableRowColumn>{supplement.price}</TableRowColumn>
          <TableRowColumn>
            {supplement.dose}
            {supplement.servingSize}
          </TableRowColumn>
          <TableRowColumn>
            {supplement.merchantLink}
            {supplement.examineLink}
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  render() {
    let { data } = this.props;

    return (
      <Table
        onRowSelection={this.handleRowSelection}
        selectable={true}
        multiSelectable={true}

      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Quantity</TableHeaderColumn>
            <TableHeaderColumn>Bottle Size</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Info</TableHeaderColumn>
            <TableHeaderColumn>Links</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderData()}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps({ stack }) {
  return { stack };
}

export default connect(mapStateToProps)(SupplementTable);
