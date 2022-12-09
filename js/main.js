window.addEventListener("DOMContentLoaded", function () {

  document.getElementById("find-me").addEventListener("click", geoFindMe);
  document.getElementById("shareBtn").addEventListener("click", share);
  let linktoshare = "";
function geoFindMe() {

  if ('geolocation' in navigator) {

      document.getElementById("status").innerHTML="מאתר את מיקומך...";
      
      navigator.geolocation.getCurrentPosition((position) => {
      
          const latitude  = position.coords.latitude;
          const longitude = position.coords.longitude;

          const mapLink = document.querySelector('#map-link');

       mapLink.href = '';
       mapLink.textContent = '';
       mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`; 

       mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

       linktoshare = `https://maps.google.com/?q=${latitude},${longitude}`;

    const iframe = document.querySelector('#iframe');
     iframe.classList.remove("d-none");
    iframe.src = `https://maps.google.com/?output=embed&q=${latitude},${longitude}`; 
  

   
        });



        
      
      /* geolocation is available */
    } else {

      alert("לא צלח");
      /* geolocation IS NOT available */
    }


}


function share() {

  if(navigator.canShare){
    navigator.share({
       title: 'שיתוף המיקום שלי',
       text: linktoshare,      })
   }


};

})



