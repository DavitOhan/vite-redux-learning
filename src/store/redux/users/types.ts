import { string } from "yup"

export interface User{
    firstLastName: string
    age: string
    jobTitle: string
}

export interface UserState{
users:User[]
}