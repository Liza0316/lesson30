function User(username, email) {
    this.username = username;
    this.email = email;
    this.id = null; 
}

User.prototype.logout = function(system) {
    system.removeUser(this.id);
    this.id = null;
    console.log(this.username + "_logged out");
};

User.prototype.login = function(system) {
    this.id = system.addUser(this);
    console.log(this.username + "_logged in with ID: " + this.id);
};

const System = {
    users: [],
    addUser(user) {
        const id = this.users.length + 1;
        this.users.push({ id, user });
        return id;
    },
    removeUser(id) {
        this.users = this.users.filter(item => item.id !== id);
    },
    getOnlineUsers() {
        return this.users.map(item => item.id);
    },
    getUser(id) {
        const foundUser = this.users.find(item => item.id === id);
        return foundUser ? foundUser.user : null;
    }
};

function Admin(username, email) {
    User.call(this, username, email);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.removeUser = function(system, userId) {
    const userToRemove = system.getUser(userId);
    if (userToRemove) {
        if (this.id !== userId) {
            system.removeUser(userId);
            console.log("User with ID " + userId + " removed by admin " + this.username);
        } else {
            console.log("Admin cannot remove themselves");
        }
    } else {
        console.log("User with ID " + userId + " not found");
    }
};

const Liza = new User("Liza", "zinkina03@gmail.com");
Liza.login(System);
console.log("Online Users:", System.getOnlineUsers());



const vlad = new Admin("vlad", "XJXJXJXJ@gmail.com");
vlad.login(System);
vlad.removeUser(System, 1);
console.log("Online Users after removing Liza", System.getOnlineUsers());
