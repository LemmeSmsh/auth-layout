// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import _ from 'lodash'
import { HomeAndAuthTemplate, Header, TableRow, TableCell, Table, Button, Field, TableRowDepartment } from 'components'
import { connect } from 'react-redux'

const DepartmentsPage = ({ department, onAddNewDepartment }) => {

  let handleNewDepName = '';
  let correctNewName = true;

  const handlerNewDepName = event => {
    handleNewDepName = event.currentTarget.value;
  };
    
  const addNewDepartment = () => {
    if (handleNewDepName != '') {
      correctNewName = true;
      console.log(correctNewName);
      onAddNewDepartment(handleNewDepName);
      document.getElementById('newDepartmentName').value = '';
    } else {
      correctNewName = false;
      wrongName();
      console.log(correctNewName);
    }
  }  
  
  return (
    <HomeAndAuthTemplate
      header={ <Header /> }     
    >
    <Field 
      name="newDepartment"
      label="New department name:"
      id="newDepartmentName"
      onChange={ handlerNewDepName }
      />
      <Button onClick={ addNewDepartment }>Create new department</Button>
      { !correctNewName && <p>Please, enter the correct new department's name</p> }
      <Table>
        <TableRow>
          <TableCell>Department</TableCell>
          <TableCell>Amount of Empolyees</TableCell>
        </TableRow>
        {
        _.map(department, (item, index) =>
          <TableRowDepartment 
            key={ index }
            name={ item.name }
            amountOfEmployees={ item.amountOfEmployees }
            order={ item.id }
            />
        )
        }
      </Table>
    </HomeAndAuthTemplate>
  )
};

const mapStateToProps = store => ({
    department: store.department,
});

const mapDispatchToProps = dispatch => ({
  onAddNewDepartment: newName => {
    dispatch({ type: "ADD_NEW_DEPARTMENT", name: newName })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsPage);