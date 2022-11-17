import { ConductorEntity } from "../conductor/conductor.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"

@Entity("vehiculo")
export class VehiculoEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marca: string;
    
    @Column()
    placa: string;

    @Column()
    modelo: string;

    @Column()
    color: string;

    @OneToOne(() => ConductorEntity, (conductor) => conductor.vehiculo)
    @JoinColumn({
        name: 'conductorId'
    })
    condutor: ConductorEntity;
}