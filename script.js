document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
});
function redirect(){
    location.href="booking.html";
}
function redirect_service1(){
    location.href="services1.html"
}
function redirect_service2(){
    location.href="services2.html"
}
function redirect_service3(){
    location.href="services3.html"
}
function redirect_service4(){
    location.href="services4.html"
}
function showCustomAlert() {
    document.getElementById('customAlert').style.display = 'block';
}
function showCustomAlert1() {
    document.getElementById('customAlert1').style.display = 'block';
}
function showCustomAlert2() {
    document.getElementById('customAlert2').style.display = 'block';
}
function closeCustomAlert() {
    document.getElementById('customAlert1').style.display = 'none';
    document.getElementById('customAlert2').style.display = 'none';
}
