let data = [
    {firstName:"Cem", lastName:"Ceti", points:31},
    {firstName:"Vali", lastName:"Gaechter", points:1},
    {firstName:"Zeki", lastName:"Aksoy", points:57}
]

function loadPeople()
{
    let html ="";
    data.forEach(element => {
        html += "<div>" + element.firstName + " " + element.lastName + "</div>"
    });

    document.getElementById("content").innerHTML = html;
}

loadPeople();