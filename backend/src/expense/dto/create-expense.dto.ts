import { IsNumber, IsString } from 'class-validator'

export class CreateExpenseDto {
    @IsString({ message: 'Please enter text' })
    title: string
    @IsNumber({}, { message: 'Only numerical values' })
    value: number
    @IsNumber({}, { message: 'Only numerical values' })
    categoryId: number
}
