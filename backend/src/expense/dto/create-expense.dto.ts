import { IsNumber, IsString } from 'class-validator'

export class CreateExpenseDto {
    @IsString({ message: 'Please enter text' })
    title: string
    @IsNumber({ maxDecimalPlaces: 3 }, { message: 'Only numerical values' })
    value: number
}
