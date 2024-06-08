import { User } from 'src/user/user.entity';

export interface ICountUserResponse {
  count: number;
}

export interface IUserResponse extends User {
  id: number;
}
