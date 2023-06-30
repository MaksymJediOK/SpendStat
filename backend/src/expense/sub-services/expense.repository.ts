import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExpenseRepository {
  constructor(private prisma: PrismaService) {
  }
}