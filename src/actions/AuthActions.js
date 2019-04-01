import { CHECK_LOGIN } from 'constants/auth'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  wrongField: 0,
  lastName: "",
  firstName: "",
  dayOfBirth: "",
  sex: "",
  phone: "",
  email: "",
});

export default function authReducer(state = initialState, action) {
  
  switch (action.type) {
    case "ADD_USER": 
      return {...state, 
      	lastName: action.lastName, 
      	firstName: action.firstName,
      	dayOfBirth: action.dayOfBirth,
      	sex: action.sex,
      	phone: action.phone,
      	email: action.email
      };
    case "WRONG_FIELD": return {...state, wrongField: state.wrongField + 1};
    default: return state;
  }
	return state;
}