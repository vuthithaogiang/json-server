

var coursesApi = "http://localhost:3000/courses";

fetch(coursesApi)

    .then(function (response) {
        return response.json();
    })
    .then(function (courses) {
        var result = courses.forEach(course => {
            var html = '';
            
        });

    })
    .catch(function (){
        console.log("Error!");
    });