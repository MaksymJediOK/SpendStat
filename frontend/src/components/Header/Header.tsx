export const Header = () => {
	return (
		<section className='container mx-auto px-4'>
			<div className='flex flex-col gap-1 text-center mt-2 '>
				<h4 className='font-semibold text-base'>All accounts</h4>
				<h2 className='font-semibold text-xl tracking-wide'>-17 778$</h2>
				<div className='flex text-center justify-center items-center'>
					<div className='bg-black p-1 mx-2 rounded-md'>
						<span className='text-white text-[16px] px-1 font-bold'>30</span>
					</div>
					<h3 className='font-semibold text-xl uppercase'>червень 2023</h3>
				</div>
			</div>
		</section>
	)
}
