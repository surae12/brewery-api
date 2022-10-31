var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class", "row" );
container.append(row);
var res=fetch("https://api.openbrewerydb.org/breweries");
res.then((data)=>data.json().then((data1)=>foo(data1)));
function foo(data1){
    for(var i=0;i<data1.length;i++){
       row.innerHTML+=`<div class="col-md-4">
       <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
       <div class="card-header">${data1[i].name}</div>
       <div class="card-body">
         <h5 class="card-title">Brewery type = ${data1[i].brewery_type}</h5>
         <h5 class="card-title">Brewery address= ${data1[i].address_2}</h5>
         <h5 class="card-title">Brewery url = ${data1[i].website_url}</h5>
         <h5 class="card-title">Brewery phone no = ${data1[i].phone}</h5>
    
       </div>
     </div>`;
    document.body.append(container); 
    }
    }
    