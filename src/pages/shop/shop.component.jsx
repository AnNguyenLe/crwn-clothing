import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
	firestore,
	covertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		// ------This uses fetch API ------
		// Read this: https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls
		// fetch(
		// 	"https://firestore.googleapis.com/v1/projects/crwn-clothing-db-f160f/databases/(default)/documents/collections"
		// )
		// 	.then((response) => response.json())
		// 	.then((collections) => console.log(collections));

		// ------This leverages using Observable/Observer pattern provided by Firebase------
		// this.unsubscribeFromSnapShot = collectionRef.onSnapshot((snapshot) => {
		// 	const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
		// 	updateCollections(collectionsMap);
		// 	this.setState({ loading: false });
		// });

		// ------This leverages using Promise pattern provided by Firebase------
		collectionRef.get().then((snapshot) => {
			const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
