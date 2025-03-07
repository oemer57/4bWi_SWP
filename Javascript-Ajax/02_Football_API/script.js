
LoadFootballTable();

function LoadFootballTable()
{
  fetch('https://api.openligadb.de/getbltable/bl1/2024')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let html = "<div id='table'>";

      for(let i = 0; i < json.length; i++)
      {
        html += `<div data-teamId="${json[i].teamInfoId}">${json[i].teamName}</div>`;
      }
      html += `</div>`
      document.getElementById("table").innerHTML = html; 
    });
}   


document.getElementById("table").addEventListener("click", (event)=>{
   let selectedTeamId = event.target.getAttribute("data-teamId");
   console.log("selectedTeamId",selectedTeamId);
   GetNextMatch(selectedTeamId);
  });

function GetNextMatch(teamId)
{
  fetch(`https://api.openligadb.de/getnextmatchbyleagueteam/4741/${teamId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let html = "<div id ='nextMatch'>";
      html += `<div>${json.matchDateTime}</div>`;

      html+=`<div><img width="30px" src="${json.team1.teamIconUrl}"/>${json.team1.teamName} vs <img width="30px" src="${json.team2.teamIconUrl}"/>${json.team2.teamName} </div>`;
      html += `</div>`
      document.getElementById("nextMatch").innerHTML = html; 
    });
}   


