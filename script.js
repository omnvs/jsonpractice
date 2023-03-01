
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <tr>
            <td>${item.season_title}</td>
            <td>${item.release_date}</td>
            <td>${item.number_of_eps}</td>
            <td>${item.rating}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});