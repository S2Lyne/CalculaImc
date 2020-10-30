import { IImcService } from 'src/interfaces/IImcServices';
import { Imc } from 'src/models/Imc';

export class ImcService implements IImcService{
    calcularImc(calculo: Imc): number {
        if (!calculo.altura) throw new Error ('Favor inserir a altura.');
        if (!calculo.peso) throw new Error ('Favor inserir o peso.');

        return parseFloat((calculo.peso / Math.pow(calculo.altura, 2)).toFixed(2));
    }
}