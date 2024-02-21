const UserData = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    isAdmin: false,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    userInformation: function(){
        console.log("Fullname:" + " " + UserData.fullName());
        console.log("Age:" + " " + UserData.age);
        console.log("Email:" + " " + UserData.email);
        if (UserData.isAdmin){
            console.log("Role: Admin");
        }
        else {
            console.log("Role: User");
        }

    },
    adminInformation: function(){
        UserData.isAdmin = true;
        console.log("Fullname:" + " " + UserData.fullName());
        console.log("Age:" + " " + UserData.age);
        console.log("Email:" + " " + UserData.email);
        console.log("Role: Admin");
    }
}


console.log("User Information");
UserData.userInformation()

console.log("Admin Information");
UserData.adminInformation()
