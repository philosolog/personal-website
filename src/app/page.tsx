"use client";
import Image from "next/image";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
// import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import github_logo from '@/assets/github.svg';

// const socials = [
// 	{
// 		id: 1,
// 		name: "/philosolog",
// 		designation: "GitHub",
// 		image: github_logo,
// 		destination: "https://github.com/philosolog"
// 	},
// ];
function name_revealer() { // TODO: Use positions instead of hover-checking, in the case of div. overlap.
	return (
		<div className="justify-center p-4 max-w-7xl  mx-auto relative w-full pt-20">
			<MaskContainer
				revealText={
					<p className="text-[3.3rem] md:text-[5.4rem] leading-[1] font-bold md:text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 bg-opacity-50 font-poppins p-6">
						philosolog
					</p>
				}
				className="h-full"
			>
				<p className="text-[3.3rem] md:text-[5.4rem] leading-[1] font-bold md:text-center bg-clip-text text-transparent bg-gradient-to-b from-jade-600 to-jade-400 bg-opacity-50 font-poppins p-6">
					Aaron Wang
				</p>
			</MaskContainer>
			<p className="m-auto py-2 font-normal text-[21px] text-neutral-600 max-w-[55%] tracking-wide text-center font-outfit">
				The aspiring undergraduate with a fervor for pure mathematics, computer science, and computational neuroscience.
			</p>
		</div>
	)
};
// function socials_bar() {
// 	return (
// 		<div className="relative flex flex-row items-center justify-center w-full">
// 			<AnimatedTooltip items={socials} />
// 		</div>
// 	)
// };
function pop_card() {
	return (
		<CardContainer className="inter-var relative w-full h-full z-0">
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					Make things float in air
				</CardItem>
			</CardBody>
		</CardContainer>
	);
};
function main() {
	return (
		// TODO: Adjust z-index for future dev. (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
		<div className="absolute m-auto w-full h-[200%] items-center justify-center cursor-green_dot">
			<div className="sticky top-0 items-center justify-center h-[50%]">
				{name_revealer()}
				<hr />
			</div>
			{/* !: Change padding to be a ratio. */}
			<div className="flex static items-center justify-center h-[50%]">
				{pop_card()}
			</div>
		</div>
	);
};

export default main;