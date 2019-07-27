import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"; // ES6

const data = {
	imageUrl: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
	title: "Bob Dylan",
	description:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		text: "Go to wikipedia"
	}
};

//create your function here
export const BootstrapCard = props => {
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.data.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.data.title}</h5>
				<p className="card-text">{props.data.description}</p>
				<a href={props.data.button.url} className="btn btn-primary">
					{props.data.button.text}
				</a>
			</div>
		</div>
	);
};

BootstrapCard.propTypes = {
	// ...prop type definitions here
	data: PropTypes.object
};

//remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<BootstrapCard data={data} />, document.getElementById("myDiv"));
