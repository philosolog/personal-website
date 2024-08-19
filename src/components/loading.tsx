import Image from "next/image";
import philosolog_logo from "@/../public/philosolog_logo.svg";

export default function Loading() {
	return (
		<Image
			className="philosolog_logo_big"
			src={philosolog_logo}
			alt=""
			width={512}
			height={512}
			style={{
				width: "auto",
				height: "35%",
				justifySelf: "end",
			}}
		/>
	)
}

// TODO: Find a way to isolate components' CSS.