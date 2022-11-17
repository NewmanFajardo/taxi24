import { DynamicModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigService } from '@nestjs/config';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
    inject: [ ConfigService ],
    async useFactory( config: ConfigService){
        const dbConfig = {
            type: config.get("DB_CONNECTION"),
            host: config.get("DB_HOST"),
            port: config.get("DB_PORT"),
            username: config.get("DB_USERNAME"),
            database: config.get("DB_NAME"),
            password: config.get("DB_PASSWORD"),
            autoLoadEntities: true,
            synchronize: config.get("IS_DEV"),
            logging: true,
        }

        return dbConfig;
    }
})