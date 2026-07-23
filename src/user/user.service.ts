import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  findAllUsers(name: string = '') {
    this.logger.log('Fetching all users');

    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  createUser(user: CreateUserDto) {
    this.logger.log('Creating a new user');
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updatedUser: Partial<UpdateUserDto>) {
    this.logger.log(`Updating user with ID: ${id}`);

    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return undefined;
    }

    this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };

    return this.users[userIndex];
  }

  deleteUser(id: number) {
    this.logger.log(`Deleting user with ID: ${id}`);

    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return null;
    }

    const [deleted] = this.users.splice(userIndex, 1);

    return deleted;
  }
}
