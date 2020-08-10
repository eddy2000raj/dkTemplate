import React from 'react' ;

export default function Category(props){

       console.log(props);

		return(<div className="column sm-12 md-6 lg-3" data-cid={props.category.id} key={props.category.id}>
				<div className={`category-item icon-${props.category.icon}`}>
					<h2>{props.category.title}</h2>
				</div>
			</div>)


}
