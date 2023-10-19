//Must use enroll.servie.ts        just like component in the middle                

export class EnrollService {                          
    onEnrollClicked(title:string){                                        // title string is like  title='Angular'; before OnEnroll(){ }
        alert('Thank you for enrolling to ' + title + ' course')
    }
   

    
    //making this for all components os i dont have to repeat  OnEnroll() {  
                            //                              alert('Thank you for enrolling to ' + this.title +' course') } on every component ts file
                            //now we import the class EnrollService  form another component  like javascpirpt component or angular
}