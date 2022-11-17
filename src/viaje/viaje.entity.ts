import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { ConductorEntity } from "../conductor/conductor.entity";
import { PasajeroEntity } from "../pasajero/pasajero.entity";
import { FacturaEntity } from "../factura/factura.entity";

@Entity("viaje")
export class ViajeEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    estatus: string;

    @ManyToOne(() => ConductorEntity, (conductor) => conductor.viajes)
    @JoinColumn({
        name: 'conductorId'
    })
    condutor: ConductorEntity;

    @ManyToOne(() => PasajeroEntity, (pasajero) => pasajero.viajes)
    @JoinColumn({
        name: 'pasajeroId'
    })
    pasajero: PasajeroEntity;

    @OneToOne(() => FacturaEntity, (factura) => factura.viaje, { cascade: true })
    factura: FacturaEntity;
}