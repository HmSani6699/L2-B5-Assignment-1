# **🎯 Interview Questions - Blog**

---

### **❓Question 1**. What are some differences between interfaces and types in TypeScript?

We can simply say that interface and type are two important and commonly used features of TypeScript. They are mainly used to define structure. Both work almost the same, but there are some differences in usage, such as:

- They have different writing syntaxes, so you have to write two different syntaxes.
- We can use interfaces only on non-primitive data types, while types can be used on any data type.
- If we write two interfaces with the same name, it will not give us any error and will connect the two, but if we write two types with the same name, it will give us an error.

> **They have different writing syntaxes, so you have to write two different syntaxes.**

**Example: Interface**

```tsx
interface MyInfo {
  name: string;
  age: number;
  address: string;
}
```

**Example: Types**

```tsx
type MyInfo = {
  name: string;
  age: number;
  address: string;
};
```

> **We can use interfaces only on non-primitive data types, while types can be used on any data type**.

**Example: Types**

```tsx
type name = number;
type srtring = number;
type array = [1,2,3,4,5];
type MyInfo {
   name: string;
   age:number;
   address:string;
   }
```

**Example: Interface**

```tsx
interface MyInfo {
  name: string;
  age: number;
  address: string;
}

interface NumberArray {
  [index: number]: number;
}
```

> If we write two interfaces with the same name, it will not give us any error and will connect the two, but if we write two types with the same name, it will give us an error.

**Example: Types**

```tsx
type Person = string; // Duplicate identifier 'Person'.
type Person = string; // Duplicate identifier 'Person'.
```

**Example: Interface**

```tsx
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = { name: "John", age: 30 };
```

---

### **❓ Question 2.** What is the use of the `keyof` keyword in TypeScript? Provide an example.

**Answer:**

We use the key of keyword in TypeScript only when we come across a situation where we need to do something with the properties of an object, then we use the key of keyword and when we use the key of keyword, it gives us its properties as a union type. As a result, when we access the properties from the object, if we want to access any property that is not in the object, then it gives us an error and does not allow us to access it as An example is given below

**Example: keyof**

```tsx
type User = {
  name: string;
  contact: string;
  address: string;
};

type useKeyofKeyword = keyof Person; // keyof User => "name" | "contact" | "address"

function getInfo<O, K extends keyof O>(obj: O, key: K): O[K] {
  return obj[key];
}

const user: User = {
  name: "Sadiqur Rahman Suny",
  contact: "01996-359111",
  address: "Dhaka",
};

getInfo(user, "name");
getInfo(user, "email"); // Error: Argument of type '"email"' is not assignable to parameter of type 'keyof User'.
```

---

### **❓ Question 3.** Provide an example of using **union** and **intersection** types in TypeScript.

**Answer:**

We use union and intersection types when we have to work with multiple types or conditions. However, the main difference between these two is:

> We use the Union ( | ) type when we have multiple options, but any one of them will work.

**Example:**

```tsx
type Status = "loading" | "success" | "error";

let currentStatus: Status;

currentStatus = "loading"; // True
currentStatus = "data"; // Error: Type '"data"' is not assignable to type 'Status'.
```

> We use the Intersection ( & ) type when we need to satisfy multiple conditions at once, meaning all types are needed together.

**Example:**

```tsx
type User = {
  name: string;
  emial: string;
};

type Admin = {
  role: string;
};

type AdminUser = Admin & User;

let admin: AdminUser = {
  name: "Sadiqur Rahman Suny",
  emial: "hmsadikurrahman120@gmail.com",
  role: "admin",
};
```
