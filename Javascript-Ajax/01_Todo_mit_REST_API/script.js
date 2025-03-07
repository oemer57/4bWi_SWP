LoadDatafromAPI()

document.getElementById("btnLoad").addEventListener("click", function() {
    LoadDatafromAPI();
})

function LoadDatafromAPI()
{
    fetch('https://67b892fc699a8a7baef48def.mockapi.io/Todo')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let html = [];

        json.forEach(todo => {
            html.push("<div><div>" + 
                todo.title + 
                "</div><img width='200px' src='" +
                todo.image +
                "?id=" +
                Math.random() +
                "'/> <div>--------------------------------------</div></div>")
        });


        document.getElementById("content").innerHTML = html.join("");
    });
}