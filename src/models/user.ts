// This typescript interface represents a user based on how we defined it within Django

export interface User{
    id: number;
    first_name: string;
    last_name: string;
    email: string
}