import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import { Button } from './ui/button'

const routes = [
	{
		href: '/',
		label: 'Products',
	},
	{
		href: '/categories',
		label: 'Categories',
	},
	{
		href: '/on-sales',
		label: 'On Sales',
	},
]

const Header = () => {
	return (
		<header className='sm:flex sm:justify-between py-3 px-4 border-b'>
			<Container>
				<div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
					<div className='flex items-center'>
						<Link href='/' className='ml-4 lg:ml-0'>
							<h1 className='text-xl font-bold'>VAN HUNG</h1>
						</Link>
					</div>
					<nav className='mx-6 flex items-center space-x-4 lg:space-x-6 md:block'>
						{routes.map((router, i) => {
							return (
								<Button key={i} asChild variant='ghost'>
									<Link
										href={router.href}
										className='text-sm font-medium transition-colors'
									>
										{router.label}
									</Link>
								</Button>
							)
						})}
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
