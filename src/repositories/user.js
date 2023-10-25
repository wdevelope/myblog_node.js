const user = require('../database/models/user');

module.exports = {
  // 회원가입
  register: async (name, email, hashedPassword) => {
    const userCheck = await user.findOne({ email: email });

    if (userCheck) {
      throw new Error('이미 존재하는 유저입니다.');
    }

    return await user.create({
      name,
      email,
      password: hashedPassword,
    });
  },
  // 유저 email 찾기
  findUserByEmail: async (email) => {
    return await user.findOne({ where: { email } });
  },
};