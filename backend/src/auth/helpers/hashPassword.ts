import * as bcrypt from 'bcrypt'
export const hashPassword = (data: string) => bcrypt.hash(data, 5)
