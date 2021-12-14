import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
  
  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    const saved = await newUser.save();
    return "User created!";
  }

  async findAll() {
    const users = await this.userModel.find().select('username');
    return users;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById({ _id: id }).select('username');
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    try {
      const deleteUser = this.userModel.findByIdAndRemove({ _id: id });
      if(deleteUser){
        return `User ${id} is deleted.`;
      }
      return "User not deleted.";
    } catch (error) {
      return {
        status: 505,
        error: 'Something went wrong'
      }
    }
  }
}
