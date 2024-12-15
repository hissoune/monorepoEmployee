import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthServiceService {

  login(data) {
    const {username,password} = data
    if (!username || !password) {
     return  new  NotFoundException('name and password ')
    }
  
     

    return {username,password};
  }
}
