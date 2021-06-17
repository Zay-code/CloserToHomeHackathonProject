var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
        response => response.json()
        ).then((html) => {
                alert('Message has been successfully sent!')
    });
});

 let a = {
        
            }
            function updateMessage(key, value){
        
                a[key] = value;
        
            }
            function sendEmail(){
                Email.send({
                    Host: "smtp.gmail.com",
                    Username:"zaynab.hartley@younglings.africa",
                    Password:"Password1",
                    To: 'closertohome01@gmail.com',
                    From: `Email: ${a["data[email]"]}`,
                    Subject: "New Email",
                    Body: `Name: ${a["data[name]"]} <br>Email: ${a["data[email]"]} <br>Contact Number: ${a["data[number]"]} <br>Address: ${a["data[address]"]} <br>Date Of Birth: ${a["data[dob]"]} <br>Message: ${a["data[message]"]} <br>`
    }).then(
        message=> alert(message)
    );
            }