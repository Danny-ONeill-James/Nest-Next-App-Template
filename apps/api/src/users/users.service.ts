import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

export type UserType = UserEntity; //TODO: create a user interface

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user: UserEntity = new UserEntity();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.isActive = true; //TODO: set as false and validate email
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user: UserEntity = new UserEntity();
    user.id = id;
    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    return this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<UserEntity> {
    await this.userRepository.softDelete(id);
    return this.userRepository.findOneOrFail({ where: { id } });
  }
}
