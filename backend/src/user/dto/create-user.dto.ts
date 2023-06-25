import { Contains, IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
    @IsString({ message: "email can't be number" })
    @IsEmail({}, { message: 'Invalid email' })
    email: string
    @IsString({ message: "username can't be number" })
    @Length(3, 30, { message: 'At least 3 characters' })
    username: string
    @IsString({ message: 'Invalid type' })
    @Length(6, 30, { message: 'At least 6 characters' })
    password: string
}
