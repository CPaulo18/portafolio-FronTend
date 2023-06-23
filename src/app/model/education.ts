export class Education{

    id?: number;
    eduName: string;
    eduDesc: string;

    constructor(eduName: string, eduDesc: string){
        this.eduName = eduName;
        this.eduDesc = eduDesc;
    }
}