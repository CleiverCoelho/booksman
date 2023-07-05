export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  purchaseDate: Date;
  cover: string;
  read: boolean;
  review: string;
  grade: number;
};

export type CreateBook = Omit<Book, "id" | "read" | "review" | "grade">;