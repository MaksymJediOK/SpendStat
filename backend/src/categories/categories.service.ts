import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor( private readonly prisma: PrismaService) {
  }

  async createCategory(dto: CreateCategoryDto) {

  }
}
