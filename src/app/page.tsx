"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

function SVGMaskEffectDemo() {
	return (
		<div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			<div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
				<MaskContainer
					revealText={
						<p className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 bg-opacity-50 p-12">
							philosolog
						</p>
					}
					className="h-full border-0 rounded-md"
				>
					<p className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-jade-600 to-jade-400 bg-opacity-50 p-12">
						Aaron Wang
					</p>
				</MaskContainer>
				<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					The aspiring undergraduate with a fervor for pure mathematics, computer science, and computational neuroscience.
				</p>
			</div>
		</div>
	);
}

export default SVGMaskEffectDemo;