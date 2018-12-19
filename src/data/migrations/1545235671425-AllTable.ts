import {MigrationInterface, QueryRunner} from "typeorm";

export class AllTable1545235671425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `jsModule` (`modileId` varchar(255) NOT NULL, `moduleName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, PRIMARY KEY (`modileId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `weeksOfModule` (`weekId` varchar(255) NOT NULL, `numberOfWeek` int NOT NULL, `moduleModileId` varchar(255) NULL, PRIMARY KEY (`weekId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`userId` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `isAdmin` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`userId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `userAnswer` (`userAnswerId` varchar(255) NOT NULL, `userUserId` varchar(255) NULL, `answerAnsweId` varchar(255) NULL, PRIMARY KEY (`userAnswerId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question` (`questionId` varchar(255) NOT NULL, `question` varchar(255) NOT NULL, `weekWeekId` varchar(255) NULL, PRIMARY KEY (`questionId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `answer` (`answeId` varchar(255) NOT NULL, `typeAnswer` varchar(255) NOT NULL, `answerValue` int NOT NULL, `questionQuestionId` varchar(255) NULL, PRIMARY KEY (`answeId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question_user_anwser_user_answer` (`questionQuestionId` varchar(255) NOT NULL, `userAnswerUserAnswerId` varchar(255) NOT NULL, PRIMARY KEY (`questionQuestionId`, `userAnswerUserAnswerId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `weeksOfModule` ADD CONSTRAINT `FK_58d9c48de9d6bff2ccfb4cf0905` FOREIGN KEY (`moduleModileId`) REFERENCES `jsModule`(`modileId`)");
        await queryRunner.query("ALTER TABLE `userAnswer` ADD CONSTRAINT `FK_2ee6ce4ed35b32a20e899db9e79` FOREIGN KEY (`userUserId`) REFERENCES `user`(`userId`)");
        await queryRunner.query("ALTER TABLE `userAnswer` ADD CONSTRAINT `FK_1701879385526e9c28e6392d4f8` FOREIGN KEY (`answerAnsweId`) REFERENCES `answer`(`answeId`)");
        await queryRunner.query("ALTER TABLE `question` ADD CONSTRAINT `FK_77484b5a75a114aef24010f2d83` FOREIGN KEY (`weekWeekId`) REFERENCES `weeksOfModule`(`weekId`)");
        await queryRunner.query("ALTER TABLE `answer` ADD CONSTRAINT `FK_d6b11fa94dbccb3d64d31fb36c6` FOREIGN KEY (`questionQuestionId`) REFERENCES `question`(`questionId`)");
        await queryRunner.query("ALTER TABLE `question_user_anwser_user_answer` ADD CONSTRAINT `FK_c82e125766e63b3f7f722a86788` FOREIGN KEY (`questionQuestionId`) REFERENCES `question`(`questionId`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `question_user_anwser_user_answer` ADD CONSTRAINT `FK_956f4dd87fc6284515e0a1e1e50` FOREIGN KEY (`userAnswerUserAnswerId`) REFERENCES `userAnswer`(`userAnswerId`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `question_user_anwser_user_answer` DROP FOREIGN KEY `FK_956f4dd87fc6284515e0a1e1e50`");
        await queryRunner.query("ALTER TABLE `question_user_anwser_user_answer` DROP FOREIGN KEY `FK_c82e125766e63b3f7f722a86788`");
        await queryRunner.query("ALTER TABLE `answer` DROP FOREIGN KEY `FK_d6b11fa94dbccb3d64d31fb36c6`");
        await queryRunner.query("ALTER TABLE `question` DROP FOREIGN KEY `FK_77484b5a75a114aef24010f2d83`");
        await queryRunner.query("ALTER TABLE `userAnswer` DROP FOREIGN KEY `FK_1701879385526e9c28e6392d4f8`");
        await queryRunner.query("ALTER TABLE `userAnswer` DROP FOREIGN KEY `FK_2ee6ce4ed35b32a20e899db9e79`");
        await queryRunner.query("ALTER TABLE `weeksOfModule` DROP FOREIGN KEY `FK_58d9c48de9d6bff2ccfb4cf0905`");
        await queryRunner.query("DROP TABLE `question_user_anwser_user_answer`");
        await queryRunner.query("DROP TABLE `answer`");
        await queryRunner.query("DROP TABLE `question`");
        await queryRunner.query("DROP TABLE `userAnswer`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `weeksOfModule`");
        await queryRunner.query("DROP TABLE `jsModule`");
    }

}
