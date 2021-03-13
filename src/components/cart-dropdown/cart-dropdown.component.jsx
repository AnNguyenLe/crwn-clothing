import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<div className='cart-items' />
		<CustomButton>GO TO CHECK OUT</CustomButton>
	</div>
);

export default CartDropdown;
