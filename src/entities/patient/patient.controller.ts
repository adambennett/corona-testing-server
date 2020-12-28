import {Body, Controller, Get, Post} from '@nestjs/common';
import {PatientService} from "./patient.service";
import {Patient} from "./patient.entity";

@Controller('patients')
export class PatientController {

    constructor(private patients: PatientService) {}

    @Get('all')
    async findAll(): Promise<string> {
        const temp = await this.patients.findAll();
        return JSON.stringify(temp);
    }

    @Post('submit')
    async post(@Body() body: any): Promise<any> {
        const patient: Patient = body.patient;
        return await this.patients.create(patient).catch(err => {
            console.log('error creating', err);
        });
    }
}
