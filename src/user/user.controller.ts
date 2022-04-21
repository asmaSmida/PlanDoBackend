<<<<<<< HEAD
import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';
=======
import { Controller,Get, Param } from '@nestjs/common'; 
>>>>>>> 0de75dc6a24cb1a4f27e03fd2c268c7d07c731cc
import { UserDetails } from './user-details.interface';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }
}
