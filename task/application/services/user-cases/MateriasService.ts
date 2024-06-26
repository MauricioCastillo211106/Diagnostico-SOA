import { Materia } from "../../../domain/entities/Materias";
import { MateriasRepository } from "../../../infraestructure/repositories/MateriasRepository";

export class MateriasService {
    constructor(private materiasRepository: MateriasRepository) {}

    async createMaterias(materias: Materia): Promise<Materia> {
        try {
            return await this.materiasRepository.createMaterias(materias);
        } catch (error) {
            throw new Error(`Error creating recipe: ${(error as Error).message}`);
        }
    }


    async getAllMaterias(): Promise<Materia[]> {
        try {
            return await this.materiasRepository.getAllMaterias();
        } catch (error) {
            throw new Error(`Error getting all recipes: ${(error as Error).message}`);
        }
    }
}