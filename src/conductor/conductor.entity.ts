import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm"
import { VehiculoEntity } from "../vehiculo/vehiculo.entity";
import { ViajeEntity } from "../viaje/viaje.entity";

@Entity("conductor")
export class ConductorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    apellido: string;

    @Column()
    dni: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @OneToOne(() => VehiculoEntity, (vehiculo) => vehiculo.condutor, { cascade: true })
    vehiculo: VehiculoEntity;

    @OneToMany(() => ViajeEntity, (viaje) => viaje.condutor)
    viajes: ViajeEntity[];
}