import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto, UpdateUserDto, UserResponseDto } from './dto/user.dto'

@Injectable()
export class UsersService {
  private users: UserResponseDto[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  ]
  private nextId = 3

  findAll(): UserResponseDto[] {
    return this.users
  }

  findOne(id: number): UserResponseDto {
    const user = this.users.find(u => u.id === id)
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return user
  }

  create(createUserDto: CreateUserDto): UserResponseDto {
    const newUser: UserResponseDto = {
      id: this.nextId++,
      ...createUserDto,
    }
    this.users.push(newUser)
    return newUser
  }

  update(id: number, updateUserDto: UpdateUserDto): UserResponseDto {
    const userIndex = this.users.findIndex(u => u.id === id)
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto }
    return this.users[userIndex]
  }

  remove(id: number): { message: string } {
    const userIndex = this.users.findIndex(u => u.id === id)
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    
    this.users.splice(userIndex, 1)
    return { message: `User with ID ${id} has been deleted` }
  }
} 