export interface User {
    id: number;
    name: string;
    username: string;
    website: string;
    email: string;
    phone: string;
  }
export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }