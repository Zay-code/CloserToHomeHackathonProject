const placeList= document.querySelector("#place-list");
const form = document.querySelector("#addPlace");
const filterCity = document.querySelector("#queryArea");
const filterGroup = document.querySelector("#queryGroup");
const filterPrice = document.querySelector("#queryPrice");

filterGroup.addEventListener('click',(e) =>{
    
    $('ul').empty().then
    var placeGroup = document.getElementById("area-group").value;
    e.preventDefault();
    db.collection("Places").where("max group", "<=",parseInt(placeGroup))
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            renderTable(doc);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});

filterCity.addEventListener('click',(e) =>{
    $('ul').empty().then
    var placeArea = document.getElementById("st").value;
    e.preventDefault();
    db.collection("Places").where("area", "==",placeArea)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            renderTable(doc);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});

filterPrice.addEventListener('click',(e) =>{
    $('ul').empty().then
    var placePrice = document.getElementById("activity-price").value;
    parseInt(placePrice); 
    db.collection("Places").where("price", "<=",parseInt(placePrice) )
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            renderTable(doc);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});






//create element
function renderTable(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let area = document.createElement('span');
    let contact = document.createElement('span');
    let maxPeople = document.createElement('span');
    let placePrice = document.createElement('div');
    

    //giving li item the id from the database
    li.setAttribute('data-id',doc.id);
    name.textContent= doc.data().name;
    area.textContent= doc.data().area;
    contact.textContent= doc.data().contact;
    maxPeople.textContent= doc.data().maxPeople;
    placePrice.textContent= doc.data().price;

    //appending data values to the list
    li.appendChild(name);
    li.appendChild(area); 
    li.appendChild(contact);
    li.appendChild(maxPeople);
    li.appendChild(placePrice);

    //li tag added to cafeList element so i can display
    placeList.appendChild(li);

    
}
/*db.collection("Places").where("area", "==", "cape town")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
*/

//uses database constant to get cafes. then triggers after data is received
db.collection('Places').get().then((snapshot)=>{
    //each array item is a doc
   snapshot.docs.forEach(doc => {
       renderTable(doc);       
   });
});

    db.collection("Places").where("price", "===", "500")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });