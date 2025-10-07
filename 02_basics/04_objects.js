
//const tinderUser = new Object()  // singleton object

const tinderUser = {}  // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "gopal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "subhadas@gmail.com",
    fullname: {
        userFullname: {
            firstName: "subha",
            lastName: "das"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3) // Object.assign(target, source)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const user = [
    {
        id: 1,
        email: "sdas@gmail.com"
    },
     {
        id: 1,
        email: "sdas@gmail.com"
    },
     {
        id: 1,
        email: "sdas@gmail.com"
    },
     {
        id: 1,
        email: "sdas@gmail.com"
    }
]

user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// destructuring of objects
const course = {
    courseName: "javascript",
    price: "999",
    courseInstructor: "subha"
}

// course.courseInstructor

// const {courseInstructor: instructor} = course
// console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = " subhadas")

//JSON STRUCTURE
// {
//     "name": "subha",
//     "course": "javascript",
//     "price": "free",
// }
[
    {},
    {},
    {}
]