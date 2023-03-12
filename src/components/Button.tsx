import { grass, red, orange } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const { styled } = createStitches({
	theme: {
		colors: {
			...grass,
			...red,
			...orange,
		},
	},
});

const Button = styled("button", {
	backgroundColor: "gainsboro",
	borderRadius: "9999px",
	border: "solid 1px black",
	fontSize: "13px",
	padding: "10px 15px",
	"&:hover": {
		backgroundColor: "lightgray",
	},
	variants: {
		type: {
			success: {
				backgroundColor: "$grass11",
				color: "white",
				"&:hover": {
					backgroundColor: "$grass9",
				},
			},
			danger: {
				backgroundColor: "$red11",
				color: "white",
				"&:hover": {
					backgroundColor: "$red9",
				},
			},
			warning: {
				backgroundColor: "$orange11",
				color: "white",
				"&:hover": {
					backgroundColor: "$orange9",
				},
			},
		},
		size: {
			small: {
				fontSize: "13px",
				height: "25px",
				paddingRight: "10px",
				paddingLeft: "10px",
			},
			large: {
				fontSize: "15px",
				height: "35px",
				paddingLeft: "15px",
				paddingRight: "15px",
			},
		},
	},
});

export default Button;
