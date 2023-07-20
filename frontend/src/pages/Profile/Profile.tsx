import { SubmitButton } from 'UI/Buttons/SubmitButton'
import { ListBox } from 'components/ListBox'
import { profileList } from './data/profileList.ts'
import { EditProfile } from './ui/EditProfile'

export const Profile = () => {
	return (
		<section className='container mx-auto flex max-w-7xl flex-col md:pr-4'>
			<div className='flex flex-col items-center justify-between px-1 py-6 md:flex-row md:px-3'>
				<div className='mb-2 flex items-center'>
					<img
						src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'
						className='h-12 w-12 rounded-full'
						alt='Profile Picture'
					/>
					<div className='ml-3'>
						<h2 className='font-semibold'>Maksym Matviichuk</h2>
						<span className='font-sans text-sm text-gray-400'>Your personal account</span>
					</div>
				</div>
				{/*Create other button*/}
				<SubmitButton buttonText='Go to main page' />
			</div>
			<div
				className={`grid grid-flow-col grid-cols-1  grid-rows-[minmax(100px,auto)_minmax(0px,_1fr)] gap-4 md:grid-rows-1 lg:grid-cols-4 lg:gap-7`}
			>
				<div className='col-span-1 '>
					<ListBox heading='General' listItems={profileList} />
				</div>

				<div className='col-span-1 lg:col-span-3'>
					<EditProfile />
				</div>
			</div>
		</section>
	)
}
