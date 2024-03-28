import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { roadmap } from "../utils/constants";
import { Particles } from "../components";

const RoadmapCard = ({ activity, id }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#fff",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "10px solid  #fff" }}
			// date={"Phase " + id + ": " + activity.subheading}
			iconStyle={{ background: activity.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<div className="w-[60%] h-[60%] object-contain flex items-center justify-center">
						<p className="text-white">{id}</p>
					</div>
				</div>
			}
		>
			<div>
				<h3 className="text-[--text] text-[24px] font-semibold">
					{activity.title}
				</h3>
				{/* <p
					className="text-[--text] text-[16px] font-medium"
					style={{ margin: 0 }}
				>
					{activity.subheading}
				</p> */}
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{activity.points.map((point, index) => (
					<li
						key={`activity-point-${index}`}
						className="text-[--text] text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Roadmap = () => {
	return (
		<div className="relative bg-[--text] py-[50px] lg:[py-100px]">
			<div className="absolute top-0 w-full h-full">
				<Particles />
			</div>
			<motion.div className="text-center">
				{/* <p className={`text-white`}>Steps to success</p> */}
				<h1 className={`text-white`}>Roadmap</h1>
			</motion.div>

			<div className="mt-7 md:mt-10 flex flex-col container">
				<VerticalTimeline>
					{roadmap.map((activity, index) => (
						<RoadmapCard
							key={`activity-${index}`}
							activity={activity}
							id={index + 1}
						/>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default Roadmap;
