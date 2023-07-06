import { Sidebar } from 'components/Sidebar'
import { SubmitButton } from 'UI/SubmitButton'
import { ListBox } from 'components/ListBox'
import { profileList } from './data/profileList.ts'

export const Profile = () => {
	return (
		<Sidebar>
			<section className='container flex flex-col mx-auto max-w-7xl'>
				<div className='flex justify-between items-center py-6 px-3'>
					<div className='flex'>
						<img
							src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'
							className='w-12 rounded-full'
							alt='Profile Picture'
						/>
						<div className='ml-3'>
							<h2 className='font-semibold'>Maksym Matviichuk </h2>
							<span className='font-sans text-gray-400'>Your personal account</span>
						</div>
					</div>
					{/*Create other button*/}
					<SubmitButton buttonText='Go to main page' />
				</div>
				<div className='grid grid-rows-1 grid-cols-4 grid-flow-col'>
					<ListBox heading='General' listItems={profileList} />
					<div className='col-span-3'>123</div>
				</div>
			</section>
		</Sidebar>
	)
}
