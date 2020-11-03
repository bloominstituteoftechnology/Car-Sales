import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: '2019 Ford Mustang',
	image:
		'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
};

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {}
});

export default carSlice.reducer;