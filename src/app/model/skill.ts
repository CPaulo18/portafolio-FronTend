export class Skill{
    id?: number;
    skillName: string;
    porcent: number; 

    constructor(skillName: string, porcent: number){
        this.skillName = skillName;
        this.porcent = porcent;
    }
}