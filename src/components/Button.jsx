import React from "react";

const Button = ({ text }) => {
	return (
		<div className="relative inline-block group">
			<span className="button-1-pre group-hover:!bg-[--text] group-hover:!border-white"></span>
			<button className="button-1 relative group-hover:!bg-white group-hover:!border-[--text] group-hover:!text-[--text] group-hover:font-semibold">
				Read More
			</button>
		</div>
	);
};

export default Button;
