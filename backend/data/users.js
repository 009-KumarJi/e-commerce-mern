import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10), // 10 is the salt
    isAdmin: true,
  },
  {
    name: 'Krishna Kumar',
    email: 'krishna@email.com',
    password: bcrypt.hashSync('123456', 10), // 10 is the salt
    isAdmin: false,
  },
  {
    name: 'Krishna Mahto',
    email: 'krishnamahto@email.com',
    password: bcrypt.hashSync('123456', 10), // 10 is the salt
    isAdmin: false,
  },
];

export default users;