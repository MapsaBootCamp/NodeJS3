-- DropForeignKey
ALTER TABLE "TagTask" DROP CONSTRAINT "TagTask_tagId_fkey";

-- AddForeignKey
ALTER TABLE "TagTask" ADD CONSTRAINT "TagTask_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
