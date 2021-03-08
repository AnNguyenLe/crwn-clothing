import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = (props) => {
	console.log(props, "props Router of HomePage");
	return (
		<div className='homepage'>
			<Directory />
		</div>
	);
};

export default HomePage;
