import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateExpenseDto {
    @IsOptional()
    @IsString({ message: 'Please enter text' })
    title?: string
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 3 }, { message: 'Only numerical values' })
    value?: number
}
