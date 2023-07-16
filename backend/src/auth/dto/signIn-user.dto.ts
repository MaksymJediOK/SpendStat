import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class signInUserDto {
	@IsNotEmpty({ message: 'can\t be empty' })
	@IsString({ message: "email can't be number" })
	@IsEmail({}, { message: 'Invalid email' })
	email: string
	@IsNotEmpty({ message: 'can\t be empty' })
	@IsString({ message: 'Invalid type' })
	@Length(6, 30, { message: 'At least 6 characters' })
	password: string
}