import { Subject } from "rxjs"

export class Course{

    courses=[ 
        {id:101, name:'JavaScript for beginners',author:'John heikela', duration:48, type:'Free',
        price:0.00, ratings:3.5, image:'assets/Java.jpg',
        description:'På dette kursus lærer du det grundlæggende i JavaScript. Dette kursus er udelukkende designet til begyndere'
      },
       
        {id:102, name:'Angular for beginners',author:'Mark heikela', duration:28, type:'Premium',
        price:29.00, ratings:4.5, image:'assets/angular.jpg',
        description:'På dette kursus vil du lære det grundlæggende i Angular. Dette kursus er udelukkende designet til begyndere'
      },
      
      {id:103, name:'React Course  for beginners',author:'Mark Vought', duration:18.5, type:'Free',
      price:0.00, ratings:4.0, image:'assets/react.jpg',
      description:'På dette kursus lærer du det grundlæggende i React. Dette kursus er udelukkende designet til begyndere'
      },
      
      {id:104, name:'Advance Angular Course',author:'Steve Smith', duration:19.5, type:'Premium',
      price:25.00, ratings:4.8, image:'assets/advanced-angular.jpg',
      description:'På dette kursus vil du lære alle begreber af Angular. Dette kursus er udelukkende designet til begyndere'
      },
      {id:105, name:' Html & Css Course for Beginners ',author:'John heikela', duration:18, type:'Free',
      price:20.00, ratings:5.0, image:'assets/Html.jpg',
      description:'På dette kursus vil du lære HTML og Css. Dette kursus er primært udelukkende designet til begyndere'
      },
      
      
      {id:106, name:'C Sharp  Course For Beginners',author:'John heikela', duration:88, type:'Free',
      price:0.00, ratings:5.0, image:'assets/Csharp.jpg',
      description:'På dette kursus vil du lære Angular with Net Core. Dette kursus er udelukkende designet til begyndere'
      },
      
      {id:107, name:'Database Course For Begginers ',author:'Steve Smith', duration:18, type:'Free',
      price:0.00, ratings:4.5, image:'assets/Sql.jpg',
      description:'På dette kursus vil du lære Angular with Net Core. Dette kursus er udelukkende designet til begyndere'
      },
      
      {id:108, name:'Advanced C Sharp Course ',author:'John heikela', duration:58, type:'Premium',
      price:18.00, ratings:5.0, image:'assets/advancedcsharp.jpg',
      description:'På dette kursus vil du lære begreberne C sharp. Dette kursus er udelukkende designet til begyndere'
      },
      
      {id:109, name:'Advance JavaScript Course',author:'John heikela', duration:46, type:'Premium',
      price:150.00, ratings:3.5, image:'assets/Java.jpg',
      description:'På dette kursus vil du lære JavaScript-begreber. Dette kursus er udelukkende designet til begyndere'
      },

      {id:110,name:"Database",author:'Steve Smith', duration:18, type:'Free',
      price:0.00, ratings:5.0, image:'assets/database.jpg',
      description:'På dette kursus vil du lære begreberne i database. Dette kursus er udelukkende designet til begyndere'
    },

    {id:111,name:"Advanced ",author:'John ', duration:38, type:'Premium',
      price:20.00, ratings:5.0, image:'assets/sql2.jpg',
      description:'På dette kursus vil du lære  avanceret begreber i sql. Dette kursus er udelukkende designet til begyndere'
    },

    {id:112,name:"Advanced Typescript",author:'Tom Johnson ', duration:28, type:'Premium',
    price:26.00, ratings:5.0, image:'assets/ts.jpg',
    description:'På dette kursus vil du lære  avanceret begreber i Type Script. Dette kursus er udelukkende designet til begyndere'
  }];
  GetAllCourses():any{
    const courseList=new Promise((resolve,reject)=>{

      setTimeout(()=> {resolve(this.courses)},2000) //so this promise will get resolved after 5 sec
    });
    return courseList;
  }

      }
      
