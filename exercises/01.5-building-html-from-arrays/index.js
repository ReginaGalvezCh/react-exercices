import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM
import PropTypes from "prop-types";

// only update the value of this array
function LiItem(props) {
	const text = props.text;
	return (
		<li className="nav-item">
			<a className="nav-link" href="#">
				{text}
			</a>
		</li>
	);
}

LiItem.propTypes = {
	text: PropTypes.string
};

const navlinkItems = [
	<LiItem key={"google"} text={"Link to google.com"} />,
	<LiItem key={"facebook"} text={"Link to facebook.com"} />,
	<LiItem key={"amazon"} text={"Link to amazon.com"} />
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
