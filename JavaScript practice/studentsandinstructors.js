var students = [ 
    {first_name : 'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

function classrom(listOfPeople){
    for (var s=0;s<students.length;s++){
       
        var currentStudent= students[s];
            console.log(currentStudent["first_name"]);
            console.log(currentStudent["last_name"]);
        }
    }

classrom(students);