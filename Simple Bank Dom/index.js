let login = document.getElementById("loginButton");

 login.addEventListener('click', function(e) {
   let userEmail = document.getElementById("email").value;
   let userPass = document.getElementById("password").value;

 //-------------------------------------------//  

if(userEmail == 'monika3456@gmail.com' && userPass == '123456'){
 window.location.href = 'bank.html';
}
 else{
  let p = document.createElement('p');
  p.innerText ='[ Invalid Information ]';
  p.style.color = 'red';
  p.style.padding ='20px';
  p.style.fontSize ='18px';
  document.getElementById('form').appendChild(p);

  alert('Please Enter Valid Information');
 }

 });
 //----------------------------------------//