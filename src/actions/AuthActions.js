import { CHECK_LOGIN } from 'constants/auth'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
});

export default function authReducer(state = initialState, action) {
	
  switch (action.type) {
    case CHECK_LOGIN:
    
      if (action.login == 'Admin' && action.password == '12345') {
        sessionStorage.setItem('correctLogin', 'admin'); 
      }

    default: return state;
  }
	return state;
}