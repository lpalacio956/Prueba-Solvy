import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({summary: 'Create a Product'})
  @ApiResponse({ status: 200, description: 'Product created.' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({summary: 'Bring all product'})
  @ApiResponse({ status: 200, description: 'Return all products.' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Bring a product by id'})
  @ApiResponse({ status: 200, description: 'Return product by id.' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update a product'})
  @ApiResponse({ status: 200, description: 'Updated product' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete a product by id'})
  @ApiResponse({ status: 200, description: 'Product removed by id.' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
