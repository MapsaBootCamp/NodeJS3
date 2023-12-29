/*
 Warnings:
 
 - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
 
 */
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userId_fkey";
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";
-- rename table and Column
ALTER TABLE User
  RENAME COLUMN updatedAt TO changeDataTime;
ALTER TABLE User
  RENAME TO customers;
-- AddForeignKey
ALTER TABLE "Task"
ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "customers"("username") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "Tag"
ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "customers"("username") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "Token"
ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "customers"("username") ON DELETE CASCADE ON UPDATE CASCADE;