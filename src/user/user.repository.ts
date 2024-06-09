import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from 'src/common/exceptions/internal-server-error.exception';
import { USER_ERROR_MESSAGES } from 'src/constants/error.constants';
import { IUserResponse } from 'src/type/user';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(user: CreateUserDto): Promise<IUserResponse> {
    const { name, surname, age, gender, problems } = user;
    try {
      const createdUser = this.create({ name, surname, age, gender, problems });
      await this.save(createdUser);
      return createdUser;
    } catch (error) {
      throw new InternalServerErrorException(USER_ERROR_MESSAGES.CREATE);
    }
  }

  async updateOne(id: number, updateData: Partial<User>): Promise<any> {
    try {
      const updatedUser = await this.update(id, updateData);
      return updatedUser;
    } catch (error) {
      throw new InternalServerErrorException(USER_ERROR_MESSAGES.UPDATE);
    }
  }

  async countUsersWithProblems(): Promise<number> {
    try {
      return this.count({ where: { problems: true } });
    } catch (error) {
      throw new InternalServerErrorException(USER_ERROR_MESSAGES.COUNT);
    }
  }
}
export default UserRepository;
