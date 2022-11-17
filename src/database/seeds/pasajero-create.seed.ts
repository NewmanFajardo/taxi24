import { PasajeroEntity } from '../../pasajero/pasajero.entity';
import { Factory, Seeder } from 'typeorm-seeding'

export class PasajeroCreateSeed implements Seeder {
    public async run( factory: Factory): Promise<void>{
        await factory(PasajeroEntity)().createMany(10);
    }
}