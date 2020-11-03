import { createSlice } from "@reduxjs/toolkit";
// import { updatePrice, incrementPrice, decrementPrice } from "../price/priceSlice";

const initialState = {
	price: {
		base: 26395,
		addons: 0,
		total: 26395,
	},
	// basePrice: 26395,
	// addonsPrice: 0,
	// totalPrice: 26395,
	added: [],
	available: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};

const featuresSlice = createSlice({
	name: "additionalFeatures",
	initialState,
	reducers: {
		featureAdded: (state, action) => {
			state.added.push(action.payload);
			state.price.addons = state.added.map(addon => {
				return addon.price;
			}).reduce((acc, val) => {
				return acc + val;
			}, 0);
			// updatePrice(state.addonsPrice);
			state.price.total = state.price.base + state.price.addons;
			// incrementPrice(action.payload.price);
		},
		featureRemoved: (state, action) => {
			state.added = state.added.filter((feature) => {
				return (action.payload.id !== feature.id);
			})
			// decrementPrice(action.payload.price);
			state.price.addons = state.added.map(addon => {
				return addon.price;
			}).reduce((acc, val) => {
				return acc + val;
			}, 0);
			state.price.total = state.price.base + state.price.addons;
		}
	}
});

export const { featureAdded, featureRemoved } = featuresSlice.actions;

export default featuresSlice.reducer;