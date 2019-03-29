import React from 'react'
import { connect } from 'react-redux'
import { TableRow, TableCell, IconButton, Field, Button } from 'components'

const TableRowDepartment = ({ order, name, amountOfEmployees, onEditDepartment, onDeleteDepartment }) => {
	const deleteDep = () => {
		onDeleteDepartment(order);
	}

  let newName = '';
  const changeInnerName = event => {
    newName = event.target.value;
  }

  const onChangeName = () => {
    onEditDepartment(order, newName);
    name = newName;
    newName = "";
  }
	return (
                <TableRow>
              <TableCell>{ name }
                <Field 
                  label="Enter new name:"
                  name="changeNameInput"
                  onChange={ changeInnerName }
                /> 
                <button onClick={ onChangeName }>Change name</button>
              </TableCell>
              <TableCell>{ amountOfEmployees }</TableCell>
              <TableCell>
      <IconButton icon='heart' onClick={ deleteDep }>Delete</IconButton>
      </TableCell>
    </TableRow>
  )
}

export default connect (
  state => ({
  }),

  dispatch => ({
    onEditDepartment: (key, newName) => {
      dispatch({ type: 'EDIT_DEPARTMENT', id: key, name: newName });
    },
    onDeleteDepartment: key => {
      dispatch({ type: 'DELETE_DEPARTMENT', id: key });
    },
  })
)(TableRowDepartment);