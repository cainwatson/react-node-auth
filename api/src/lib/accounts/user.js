const store = [
  {
    id: 1,
    username: 'jamie',
    password: 'jamie',
  },
];

const User = {
  async findByUsername(username) {
    return store.find((user) => user.username === username) ?? null;
  },
  async save(user) {
    const savedUser = {
      ...user,
      id: store.length + 1,
    };

    store.push(savedUser);

    return savedUser;
  },
  toJson(user) {
    const { password: _, ...json } = user;

    return json;
  },
};

export default User;
