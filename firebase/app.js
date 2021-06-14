/*
db.collection('Places').get().then((snapshot)=>{  //snapshot is representation of the data
 snapshot.docs.forEach(doc => {
     console.log(doc.data())
 });;
})
*/


const placeList= document.querySelector("#place-list");
const form = document.querySelector("#addPlace");
const filterCity = document.querySelector("#queryArea");

filterCity.addEventListener('click',(e) =>{
    console.log(oneRef);
});
//create element
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let area = document.createElement('span');
    let contact = document.createElement('span');
    let maxPeople = document.createElement('span');
    let placePrice = document.createElement('span');
    let cross = document.createElement('div');

    //giving li item the id from the database
    li.setAttribute('data-id',doc.id);
    name.textContent= doc.data().name;
    area.textContent= doc.data().area;
    contact.textContent= doc.data().contact;
    maxPeople.textContent= doc.data().maxPeople;
    placePrice.textContent= doc.data().placePrice;
    cross.textContent = "x";

    //appending data values to the list
    li.appendChild(name);
    li.appendChild(area); 
    li.appendChild(contact);
    li.appendChild(maxPeople);
    li.appendChild(placePrice);
    li.appendChild(cross);

    //li tag added to cafeList element so i can display
    placeList.appendChild(li);

    //delete
    //we get the id of the parent element, which is the docID and then delete
    cross.addEventListener('click', (e) =>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Places').doc(id).delete();
    })
}
db.collection("Places").where("area", "==", "cape town")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

//console.log(oneRef);
//uses database constant to get cafes. then triggers after data is received
db.collection('Places').get().then((snapshot)=>{
    //each array item is a doc
   snapshot.docs.forEach(doc => {
       renderCafe(doc);       
   });
});


//saving data to the database. Won't show on front end unless reloaded
/* this is because data was sent to the database and not back
form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value="";
    form.city.value="";
});
*/
/*real-time listener 
db.collection('cafes').orderBy('city').onSnapshot(snapshot => {
    //lstening for changes in array element's type
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderCafe(change.doc);
        }
        else if(change.type == 'removed'){
            
            let li = cafeList.querySelector('[data-id=' +change.doc.id + ']')
            cafeList.removeChild(li);
        }
    })
})
filterCity.addEventListener('submit',(e) => {
db.collection('cafes').where("city","==",form.city.value).orderBy('name').get().then((snapshot)=>{
    //each array item is a doc
   snapshot.docs.forEach(doc => {
       renderCafe(doc);
    })
   });
});
*/