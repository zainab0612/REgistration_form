function Submit() {
    var name = document.getElementById('name').value ;
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var genders = document.querySelectorAll('input[name="gender"]');
    var selectedGenders = [];
    genders.forEach(function(gender) {
        if (gender.checked) {
            selectedGenders.push(gender.value);
        }
    });

    var registered = document.getElementById("registration-Form") ;
    var registration = document.createElement('div');
    registration.setAttribute('class','form-control list-group text-white border border-primary p-3 my-3');

    var p1 = document.createElement('p');
    p1.textContent = 'Name: ' + name;
    var p2 = document.createElement('p');
    p2.textContent = 'Father Name: ' + fname;
    var p3 = document.createElement('p');
    p3.textContent = 'Email: ' + email;
    var p4 = document.createElement('p');
    p4.textContent = 'Phone Number: ' + number;
    var p5 = document.createElement('p');
    p5.textContent = 'Gender: ' + selectedGenders;
    registration.appendChild(p1);
    registration.appendChild(p2);
    registration.appendChild(p3);
    registration.appendChild(p4);
    registration.appendChild(p5);
    registered.appendChild(registration);
    document.getElementById('name').value = ''
    document.getElementById('fname').value = ''
    document.getElementById('email').value = ''
    document.getElementById('number').value = ''
    document.querySelectorAll('input[name="gender"]').forEach(gender => gender.checked = false);
}


