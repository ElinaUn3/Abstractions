class UserProfileManager {
  constructor() {
    this.users = [];
  }
  static generateId() {
    return 'user_' + Math.floor(Math.random() * 10000);
  }

  addUser(userInfo) {
    const user = {
      id: UserProfileManager.generateId(),
      name: userInfo.name,
      email: userInfo.email,
    };

    this.users.push(user);
  }
  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  }
  updateUser(userId, newInfo) {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users[index] = {
        id: userId,
        ...newInfo,
      };
    }
  }

  findUserByName(name) {
    return this.users.filter(user => user.name.includes(name));
  }

  getAllUsers() {
    return this.users;
  }
}

const profileManager = new UserProfileManager();
profileManager.addUser({ name: "Наги", email: "nagi@mail.ru" });
profileManager.addUser({ name: "Каумодаки", email: "KaumodakЕveryDay@mail.ru" }); 
console.log(profileManager.getAllUsers()); 
profileManager.updateUser(1, { name: "Наги" }); 
profileManager.removeUser(2); 
console.log(profileManager.findUserByName("Наг")); 