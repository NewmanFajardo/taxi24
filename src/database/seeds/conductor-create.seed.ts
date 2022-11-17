import { ConductorEntity } from '../../conductor/conductor.entity';
import { Factory, Seeder } from 'typeorm-seeding'

export class ConductorCreateSeed implements Seeder {
    public async run( factory: Factory): Promise<void>{
        await factory(ConductorEntity)().createMany(10);
    }
}