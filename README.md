# **🎯 Interview Questions - Blog**

---

**❓Question 1**. What are some differences between interfaces and types in TypeScript?

We can simply say that interface and type are two important and commonly used features of TypeScript. They are mainly used to define structure. Both work almost the same, but there are some differences in usage, such as:

> They have different writing syntaxes, so you have to write two different syntaxes.

> We can use interfaces only on non-primitive data types, while types can be used on any data type.

> If we write two interfaces with the same name, it will not give us any error and will connect the two, but if we write two types with the same name, it will give us an error.

1. **They have different writing syntaxes, so you have to write two different syntaxes.**

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

1. **We can use interfaces only on non-primitive data types, while types can be used on any data type**.

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

1. If we write two interfaces with the same name, it will not give us any error and will connect the two, but if we write two types with the same name, it will give us an error.

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
