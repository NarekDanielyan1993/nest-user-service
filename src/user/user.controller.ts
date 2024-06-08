import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { ICountUserResponse, IUserResponse } from 'src/type/user';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    return await this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<void> {
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Put('fix-problems')
  async fixProblems(): Promise<ICountUserResponse> {
    const count = await this.userService.resetProblemsFlagAndRetrieveCount();
    return { count };
  }
}
