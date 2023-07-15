import { Sidebar } from 'components/Sidebar'
import { SubmitButton } from 'UI/Buttons/SubmitButton'
import { ListBox } from 'components/ListBox'
import { profileList } from './data/profileList.ts'
import { EditProfile } from './ui/EditProfile'

export const Profile = () => {
	return (
		<Sidebar>
			<section className='container flex flex-col mx-auto max-w-7xl md:pr-4'>
				<div className='flex md:flex-row flex-col justify-between items-center py-6 px-1 md:px-3'>
					<div className='flex items-center mb-2'>
						<img
							src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'
							className='w-12 h-12 rounded-full'
							alt='Profile Picture'
						/>
						<div className='ml-3'>
							<h2 className='font-semibold'>Maksym Matviichuk</h2>
							<span className='font-sans text-gray-400 text-sm'>Your personal account</span>
						</div>
					</div>
					{/*Create other button*/}
					<SubmitButton buttonText='Go to main page' />
				</div>
				<div
					className={`grid grid-rows-[minmax(100px,auto)_minmax(0px,_1fr)] md:grid-rows-1  lg:grid-cols-4 grid-cols-1 grid-flow-col lg:gap-7 gap-4`}
				>
					<div className='col-span-1 '>
						<ListBox heading='General' listItems={profileList} />
					</div>

					<div className='col-span-1 lg:col-span-3'>
						<EditProfile />
					</div>
				</div>
			</section>
		</Sidebar>
	)
}
