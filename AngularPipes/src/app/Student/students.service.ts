import { Student } from "./student";

export class StudentService{
    students:Student[]=[
        {name:'Mark Vought',course:'MBA',marks:520,DOB:new Date('11-12-1997'),gender:'Male'},
        {name:'Steve Smith',course:'BTECH',marks:420,DOB:new Date('1-2-1999'),gender:'Male'},
        {name:'Marry Jane',course:'MBA',marks:550,DOB:new Date('10-12-2003'),gender:'Female'},
        {name:'John Dee',course:'BTECH',marks:320,DOB:new Date('11-1-1992'),gender:'Male'},
        {name:'Jon Smith',course:'M.SC',marks:130,DOB:new Date('8-2-1999'),gender:'Male'},
        {name:'Jonas Weber',course:'M.SC',marks:220,DOB:new Date('11-1-1997'),gender:'Male'}
    ];
    totalMarks:number=600;
    
  

}