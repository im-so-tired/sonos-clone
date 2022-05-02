import React from "react";
import { HeaderShop } from "../Components/HeaderShop";
import { Shop } from "../Components/Shop";

export const Main:React.FC = () => {
	return(
		<>
			<HeaderShop></HeaderShop>
			<Shop></Shop>		
		</>
	)
}