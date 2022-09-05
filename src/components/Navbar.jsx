import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((link, i) => (
					<li
						key={link.id}
						className=
						{`font-poppins font-normal hover:text-secondary
						cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
						text-white`}
					>
						<a href={`#${link.id}`}>
							{link.title}
						</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[28px] h-[28px] object-contain hover:cursor-pointer'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${toggle ? 'flex' : 'hidden'} 
						p-6 bg-black-gradient absolute 
						top-20 right-0 my-2 mx-4 min-w-[140px] rounded-xl sidebar `}
				>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((link, i) => (
							<li
								key={link.id}
								className=
								{`font-poppins font-normal 
							      cursor-pointer text-[16px] hover:text-secondary
								  ${i === navLinks.length - 1 ? 
									'mr-0' : 'mb-4'}
								text-white`}
							>
								<a href={`#${link.id}`}>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar