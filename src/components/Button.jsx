import React from "react";

const Button = ({ text, icon, type }) => {
	return (
		<div className="relative inline-block group">
			<span
				className={`${
					type === 2
						? "button-2-pre group-hover:!bg-white group-hover:!border-white"
						: "button-1-pre group-hover:!bg-[--text] group-hover:!border-white"
				}`}
			></span>
			<button
				className={`${
					type === 2
						? "button-2 relative group-hover:!bg-[--text] group-hover:!border-[--text] group-hover:!text-white group-hover:font-bold group-hover:shadow-sm group-hover:shadow-white"
						: "button-1 relative group-hover:!bg-white group-hover:!border-[--text] group-hover:!text-[--text] group-hover:font-bold"
				}`}
			>
				{icon}
				{text}
			</button>
		</div>
	);
};

export default Button;
