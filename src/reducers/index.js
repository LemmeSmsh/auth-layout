import { combineReducers } from 'redux'
import authReducer from 'actions/AuthActions'
import departmentsReducer from 'actions/DepartmentsActions'
import employeesReducer from 'actions/EmployeesActions'

export const rootReducer = combineReducers({
	auth: authReducer,
	department: departmentsReducer,
	employee: employeesReducer,
})