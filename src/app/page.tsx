"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
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

function revealer() {
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
function main() {
	return (
		<div className="absolute m-auto w-full h-full items-center justify-center">
			{revealer()}
			<hr />
			<br />
			{socials_bar()}
		</div>
	);
};

export default main;