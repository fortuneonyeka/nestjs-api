import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Fortue Onyeka',
      email: 'fortune@email.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Shaw Mike',
      email: 'shaw@email.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Abdul Mike',
      email: 'abdul@email.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Lucy Eva',
      email: 'lucy@email.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Jon Doe',
      email: 'jon@email.com',
      role: 'INTERN',
    },
    {
      id: 6,
      name: 'Shola Mike',
      email: 'shola@email.com',
      role: 'INTERN',
    },
    {
      id: 7,
      name: 'Bose Abosade',
      email: 'bose@email.com',
      role: 'INTERN',
    },
  ];

  getAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const userByHighestId = [...this.users.sort((a, b) => (b.id = a.id))];
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.getOneUser(id);
  }

  delete(id: number) {
    const removedUser = this.getOneUser(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
