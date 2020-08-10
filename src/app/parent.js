import React from 'react' ;
import reactDom from 'react-dom';
import { connect, Provider } from 'react-redux';
import  { createStore,applyMiddleware } from  'redux';
import thunk from 'redux-thunk';
import App from './app';

//Reducer function
const user = (state=[], action) => {
					switch (action.type) {
						case 'LOAD_DATA':
							return Object.assign( {}, state, {categories: action.payload} );
						default:
						return state;
					}
			};



const store=createStore(user,applyMiddleware(thunk));

reactDom.render(<Provider store={store}><App/></Provider>,document.getElementById("app1"));