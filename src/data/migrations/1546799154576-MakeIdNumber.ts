import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeIdNumber1546799154576 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `jsModule` (`moduleId` int NOT NULL AUTO_INCREMENT, `moduleName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, PRIMARY KEY (`moduleId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `partOfModule` (`partId` int NOT NULL AUTO_INCREMENT, `partName` varchar(255) NOT NULL, `fk_moduleId` int NULL, PRIMARY KEY (`partId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question` (`questionId` int NOT NULL AUTO_INCREMENT, `question` varchar(255) NOT NULL, `fk_partId` int NULL, PRIMARY KEY (`questionId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `answer` (`answerId` int NOT NULL AUTO_INCREMENT, `answerOptions` varchar(255) NOT NULL, `answerValue` int NOT NULL, `fk_questionId` int NULL, PRIMARY KEY (`answerId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`userId` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isAdmin` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`userId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `UsersAnswers` (`userUserId` int NOT NULL, `answerAnswerId` int NOT NULL, PRIMARY KEY (`userUserId`, `answerAnswerId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `partOfModule` ADD CONSTRAINT `FK_1fa5dbbf13b8156dfbc0e75e761` FOREIGN KEY (`fk_moduleId`) REFERENCES `jsModule`(`moduleId`)");
        await queryRunner.query("ALTER TABLE `question` ADD CONSTRAINT `FK_71448fa800d4576cc938905c204` FOREIGN KEY (`fk_partId`) REFERENCES `partOfModule`(`partId`)");
        await queryRunner.query("ALTER TABLE `answer` ADD CONSTRAINT `FK_a9ad0ac6e5342ecf959c2b4b835` FOREIGN KEY (`fk_questionId`) REFERENCES `question`(`questionId`)");
        await queryRunner.query("ALTER TABLE `UsersAnswers` ADD CONSTRAINT `FK_493135141c5b0d7a907a9ce6f33` FOREIGN KEY (`userUserId`) REFERENCES `user`(`userId`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `UsersAnswers` ADD CONSTRAINT `FK_682d428b49c8eaeba78cf5d0ac0` FOREIGN KEY (`answerAnswerId`) REFERENCES `answer`(`answerId`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `UsersAnswers` DROP FOREIGN KEY `FK_682d428b49c8eaeba78cf5d0ac0`");
        await queryRunner.query("ALTER TABLE `UsersAnswers` DROP FOREIGN KEY `FK_493135141c5b0d7a907a9ce6f33`");
        await queryRunner.query("ALTER TABLE `answer` DROP FOREIGN KEY `FK_a9ad0ac6e5342ecf959c2b4b835`");
        await queryRunner.query("ALTER TABLE `question` DROP FOREIGN KEY `FK_71448fa800d4576cc938905c204`");
        await queryRunner.query("ALTER TABLE `partOfModule` DROP FOREIGN KEY `FK_1fa5dbbf13b8156dfbc0e75e761`");
        await queryRunner.query("DROP TABLE `UsersAnswers`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `answer`");
        await queryRunner.query("DROP TABLE `question`");
        await queryRunner.query("DROP TABLE `partOfModule`");
        await queryRunner.query("DROP TABLE `jsModule`");
    }

}
