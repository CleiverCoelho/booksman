import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  const result = await prisma.books.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findUnique({
    where: { id }
  });
  return result;
}

export async function createBook(book: CreateBook) {
  const { title, author, publisher, purchaseDate, cover } = book;

  const dateTimePurchaseDate = purchaseDate.toString() + "T00:00:00.000Z";
  const result = await prisma.books.create({
    data: {
      title, author, publisher, purchaseDate: dateTimePurchaseDate, cover
    }
  });

  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  const result = await prisma.books.update({
    data: {
      read: true,
      grade,
      review
    },
    where: {
      id: bookId
    }
  });
  return result;
}