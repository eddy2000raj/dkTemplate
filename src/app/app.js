import React from 'react' ;
import axios from 'axios';
import Category from './category';
import { connect} from 'react-redux';

/*const Action = {
		LoadData: (data) => {
			return { type : 'LOAD_DATA', payload: data }
		}
}
*/

const LoadData= (data) => {
			return { type : 'LOAD_DATA', payload: data }
		}


const LoadDynamicDataFromServer=()=>{

  return dispatch => {

  	axios.get('../src/data/categories.json').then((result)=>{
         	//this.setState({'categories':result.data})
         	//this.props.loadDataFromServer(result.data);
         	 dispatch(LoadData(result.data));
         })
    
  };
}

class App extends React.Component{

	constructor(props){
		super(props);

		/*this.state={
          categories:[]
		}*/
		
	}

	render(){

		if(this.props.categories && this.props.categories.length>0){
			return(
			<div>
			{this.props.categories.map((category)=>{ return <Category category={category} /> }) }
			</div>)
		}
		

		return(<div>
			  No Category found
			</div>) ;

	}

    componentDidMount(){
         
        /*
        without redux thunk--or direct axios call
        axios.get('../src/data/categories.json').then((result)=>{
         	//this.setState({'categories':result.data})
         	this.props.loadDataFromServer(result.data);
         })*/

        //With redux thunk
        this.props.LoadDynamicDataFromServer();
         
    }

}

const mapStateToProps = (state) => {
		return {
			categories: state.categories
		};
}
const mapDispatchToProps = (dispatch) => {
		return {
			loadDataFromServer: (data) => dispatch( Action.LoadData(data) ),
			LoadDynamicDataFromServer: () => dispatch( LoadDynamicDataFromServer())
		};
};

export default connect(mapStateToProps,mapDispatchToProps)(App) ;