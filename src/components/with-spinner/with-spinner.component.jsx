import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
// 	return isLoading ? (
// 		<SpinnerOverlay>
// 			<SpinnerContainer />
// 		</SpinnerOverlay>
// 	) : (
// 		<WrappedComponent {...otherProps} />
// 	);
// };

// With writing have the same meaning with the above but more readable:

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};

	return Spinner;
};

export default WithSpinner;
