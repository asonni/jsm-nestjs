import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  // GET /user
  @Get()
  getUsers() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Aladdin' },
      { id: 3, name: 'Jain Doe' },
    ];
  }
}
