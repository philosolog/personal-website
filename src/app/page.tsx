"use client";
import Image from "next/image";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import github_logo from '@/assets/github.svg';

const socials = [
	{
		id: 1,
		name: "/philosolog",
		designation: "GitHub",
		image: github_logo,
		destination: "https://github.com/philosolog"
	},
];

function name_revealer() {
	return (
		<div className="p-4 max-w-7xl  mx-auto relative w-full pt-20">
			<MaskContainer
				revealText={
					<p className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 bg-opacity-50 p-12">
						philosolog
					</p>
				}
				className="h-full border-0 rounded-md"
			>
				<p className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-jade-600 to-jade-400 bg-opacity-50 p-12">
					Aaron Wang
				</p>
			</MaskContainer>
			<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative mt-[-20px]">
				The aspiring undergraduate with a fervor for pure mathematics, computer science, and computational neuroscience.
			</p>
		</div>
	)
};
function socials_bar() {
	return (
		<div className="relative flex flex-row items-center justify-center w-full">
			<AnimatedTooltip items={socials} />
		</div>
	)
};
function bento_grid() {
	const Skeleton = () => (
		<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
	);
	const items = [
		{
			title: "Tools",
			description: "",
			header: <Skeleton />,
			className: "md:col-span-2",
		},
		{
			title: "Projects",
			description: "",
			header: <Skeleton />,
			className: "md:col-span-1",
		},
		{
			title: "About",
			description: "",
			header: <Skeleton />,
			className: "md:col-span-1",
		},
		{
			title: "Blog",
			description:
				"",
			header: <Skeleton />,
			className: "md:col-span-2",
		},
	];

	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
				/>
			))}
		</BentoGrid>
	);
};
function pop_card() {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[50rem] h-full rounded-xl p-2 border  ">
				{bento_grid()}
			</CardBody>
		</CardContainer>
	);
};
function main() {
	return (
		<div className="absolute m-auto w-full h-[200%] items-center justify-center">
			<div className="relative items-center justify-center h-[50%]">
				{name_revealer()}
				<hr />
			</div>
			<div className="flex relative items-center justify-center h-[50%]">
				{pop_card()}
			</div>
		</div>
	);
};

export default main;