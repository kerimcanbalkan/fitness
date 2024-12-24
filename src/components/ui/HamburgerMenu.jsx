import React from "react";
import { useState } from "react";

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-0.5 w-4 my-0.5 rounded-full bg-magenta transition ease transform duration-300`;

	return (
		<div className="md:hidden">
			<button
				className="relative flex flex-col h-6 w-6 justify-center items-center group z-50"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div
					className={`${genericHamburgerLine} ${isOpen
						? "rotate-45 translate-y-1.5 opacity-100"
						: "opacity-100"
						}`}
				/>
				<div
					className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"
						}`}
				/>
				<div
					className={`${genericHamburgerLine} ${isOpen
						? "-rotate-45 -translate-y-1.5 opacity-100"
						: "opacity-100"
						}`}
				/>
			</button>

			<div
				className={`fixed w-screen h-screen bg-[#fff] text-3xl top-0 left-0 flex flex-col justify-center items-center z-40
					transition-opacity duration-500 ease-in-out
					${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} `}
				onClick={() => setIsOpen(!isOpen)}
			>
				<a href="/" className="text-black my-2 hover:text-magenta">Home</a>
				<a href="#About" className="text-black my-2 hover:text-magenta">About</a>
				<a href="#Contact" className="text-black my-2 hover:text-magenta">Contact</a>
				<a href="#User" className="text-black my-2 hover:text-magenta">User</a>
			</div>		</div>
	);
}

