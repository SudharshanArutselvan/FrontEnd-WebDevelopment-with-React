import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{

	renderComments(comments) {
		const listedComments = comments.map((comment) => {
            return (
            	<ul key={comment.id} className="list-unstyled">
	              	<li>{comment.comment}</li>
	              	<li>-- {comment.author}, {comment.date}</li>
              	</ul>
            );
        });
		if(comments.length>0) {
			return (
				<div className="">
					<h4>Comments</h4>
		          	{listedComments}
	          	</div>
	        );
		}
        else {
        	return (<div></div>);
        }
	}

	renderDish(dish){
      	return (
          	<Card>
            	<CardImg top src={dish.image} alt={dish.name} />
            	<CardTitle>{dish.name}</CardTitle>
             	<CardText>{dish.description}</CardText>
          	</Card>
        );
    }

	render(){
		if(this.props.dish!=null){
			return (
				<div className="row">
					<div className="col-12 col-md-5 mt-5 m-1">
						{this.renderDish(this.props.dish)}
					</div>
					<div className="col-12 col-md-5 mt-5 m-1 text-left">
						{this.renderComments(this.props.dish.comments)}
					</div>
				</div>
			);
		} else {
			return (<div></div>);
		}
	}
}

export default DishDetail;