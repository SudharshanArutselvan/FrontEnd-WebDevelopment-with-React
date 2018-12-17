import React from 'react';
import { Card, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

	function RenderDish({dish}){
		return (
          	<Card>
            	<CardImg top src={dish.image} alt={dish.name} />
            	<CardTitle>{dish.name}</CardTitle>
             	<CardText>{dish.description}</CardText>
          	</Card>
        );
	}

	function RenderComments({comments}){
		const listedComments = comments.map((comment) => {
            return (
            	<ul key={comment.id} className="list-unstyled">
	              	<li>{comment.comment}</li>
	              	<li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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

	const DishDetail = (props) => {
		if(props.dish != null){
			return (
				<div className="container">
					<div className="row">
	                    <Breadcrumb>
	                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
	                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
	                    </Breadcrumb>
	                    <div className="col-12">
	                        <h3>{props.dish.name}</h3>
	                        <hr />
	                    </div>                
	                </div>
					<div className="row">
						<div className="col-12 col-md-5 mt-5 m-1">
							<RenderDish dish={props.dish}/>
						</div>
						<div className="col-12 col-md-5 mt-5 m-1 text-left">
							<RenderComments comments={props.comments} />
						</div>
					</div>
				</div>
			);
		} else {
			return (<div></div>);
		}
	}

/*class DishDetail extends Component{

	renderComments(comments) {
		const listedComments = comments.map((comment) => {
            return (
            	<ul key={comment.id} className="list-unstyled">
	              	<li>{comment.comment}</li>
	              	<li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 mt-5 m-1">
							{this.renderDish(this.props.dish)}
						</div>
						<div className="col-12 col-md-5 mt-5 m-1 text-left">
							{this.renderComments(this.props.dish.comments)}
						</div>
					</div>
				</div>
			);
		} else {
			return (<div></div>);
		}
	}
}*/

export default DishDetail;