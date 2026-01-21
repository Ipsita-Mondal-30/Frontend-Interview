export interface Blog {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

export interface NewBlogInput {
  title: string;
  category: string[];
  description: string;
  coverImage: string;
  content: string;
  date: string;
}
