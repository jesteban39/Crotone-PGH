import {
  Model, Column, Table, HasMany
} from 'sequelize-typescript';

import { Sale } from './Sale';

@Table
export class User extends Model<User> {

  @Column
  userNane!: string; //userName

  @Column
  email!: string;

  @Column
  hashPasword!: string;

  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @HasMany(() => Sale)
  Sales!: Sale[];

}
