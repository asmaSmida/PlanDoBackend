import { Injectable } from '@nestjs/common';
import { Estate } from 'src/estate/estate.schema';

@Injectable()
export class EstatesService {
    private readonly estates: Estate[] = [];

    create(estate: Estate){
        this.estates.push(estate);
    }
    findAll(): Estate[]{
        return this.estates;
    }
}
