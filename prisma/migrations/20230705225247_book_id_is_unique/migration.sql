-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(6) NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "grade" INTEGER,
    "review" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_id_key" ON "books"("id");
