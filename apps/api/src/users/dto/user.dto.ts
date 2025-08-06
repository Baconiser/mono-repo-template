import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString, IsEmail, IsNumber, IsOptional, Min } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  name: string

  @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
  @IsEmail()
  email: string

  @ApiProperty({ example: 30, description: 'The age of the user', minimum: 0 })
  @IsNumber()
  @Min(0)
  age: number
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user', required: false })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ example: 'john@example.com', description: 'The email of the user', required: false })
  @IsEmail()
  @IsOptional()
  email?: string

  @ApiProperty({ example: 30, description: 'The age of the user', minimum: 0, required: false })
  @IsNumber()
  @IsOptional()
  @Min(0)
  age?: number
}

export class UserResponseDto {
  @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
  id: number

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string

  @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
  email: string

  @ApiProperty({ example: 30, description: 'The age of the user' })
  age: number
} 