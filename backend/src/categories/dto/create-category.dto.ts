import { IsOptional, IsString, Length } from 'class-validator'

export class CreateCategoryDto {
    @IsString({ message: 'Must be a string' })
    @Length(3, 30, { message: 'At least 3 symbols' })
    title: string
    @IsOptional()
    @IsString({ message: 'Must be a string' })
    color?: string
    @IsOptional()
    @IsString()
    icon?: string
}
