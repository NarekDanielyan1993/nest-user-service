import { Injectable } from '@nestjs/common';
import { USER_ERROR_MESSAGES } from 'src/constants/error.constants';
import { IUserResponse } from 'src/type/user';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import UserRepository from 'src/user/user.repository';
import { NotFoundException } from '../common/exceptions/not-found.exception';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: CreateUserDto): Promise<IUserResponse> {
    return await this.userRepository.createUser(user);
  }

  async updateUser(id: number, updateData: Partial<User>): Promise<void> {
    return await this.userRepository.updateOne(id, updateData);
  }

  async resetProblemsFlagAndRetrieveCount(): Promise<number> {
    const count = await this.userRepository.countUsersWithProblems();

    if (count === 0) {
      throw new NotFoundException(USER_ERROR_MESSAGES.NOT_FOUND);
    }

    await this.userRepository.update({}, { problems: false });

    return count;
  }
}
