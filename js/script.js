var toggleBtn = document.getElementById('toggle');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleBtn.addEventListener('click', handleClick);

// scroll
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
      });
  });
  // Scroll to Reserve now section
  document.querySelector('a[href="#services"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#services').scrollIntoView({
          behavior: 'smooth'
      });
  });
  // Scroll to About Us section
  document.querySelector('a[href="#aboutus"]').addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector('#aboutus');
    const offsetTop = section.offsetTop;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const scrollTo = offsetTop - (windowHeight - sectionHeight) / 2;
    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    });
});
    // Scroll to Home section
    document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#home').scrollIntoView({
          behavior: 'smooth'
      });
  });
  document.querySelector('a[href="#buyinsurance"]').addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector('#buyinsurance');
    const offsetTop = section.offsetTop;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const scrollTo = offsetTop - (windowHeight - sectionHeight) / 2;
    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    });
});
  document.querySelector('a[href="#insurancequery"]').addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector('#insurancequery');
    const offsetTop = section.offsetTop;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const scrollTo = offsetTop - (windowHeight - sectionHeight) / 2;
    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    });
});

});



// Modal

function myModel() {
  let modal = document.getElementById("modal");
  if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('animate-zoomIn');
  } else {
      modal.classList.remove('animate-zoomIn');
      modal.classList.add('hidden');
  }
}

function myModel1() {
  let modal = document.getElementById("modal1");
  if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('animate-zoomIn');
  } else {
      modal.classList.remove('animate-zoomIn');
      modal.classList.add('hidden');
  }
}

// Data to Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzaYT6r255hzr7UiC4U5u3-o-8znYZqV54LNMmvHdc5zNhFHbYU-eGT7JetGa_SxMHr/exec';
const form = document.forms['submit-to-google-sheet'];
const loadingIndicator = document.querySelector('.loading');

form.addEventListener('submit', e => {
  e.preventDefault();
  loadingIndicator.style.display = 'block';
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      loadingIndicator.style.display = 'none';
      alert("Thank you! your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message);
      loadingIndicator.style.display = 'none';
    });
});

  const form1 = document.forms['submit-to-google-sheet1']
  const loadingIndicator1 = document.querySelector('.loading1')
  form1.addEventListener('submit', e => {
    e.preventDefault();
    loadingIndicator.style.display = 'block' ;
    fetch(scriptURL, { method: 'POST', body: new FormData(form1) })
    .then(response => {
      loadingIndicator.style.display = 'none';
      alert("Thank you! your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message);
      loadingIndicator.style.display = 'none';
    });
  })

  // WhatsApp Message

  function sendFormData(event) {
    event.preventDefault();
    var formData = new FormData(document.forms['submit-to-google-sheet3']);
    var name = formData.get('Full-name1');
    var email = formData.get('Email1');
    var insurance = formData.get('Insurance1');
    var message = formData.get('message1');
    var Contactnumber = formData.get('Contactnumber1');
    var Location = formData.get('Location1');

  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Insurance:', insurance);
    console.log('Message:', message);
    console.log('ContactNumbee:' ,Contactnumber);
    console.log('Location:' ,Location);
  
    var phonenumber = "8124213593"; 
    var url = "https://wa.me/" + phonenumber + "?text=" +
      "*Name:* " + name + "%0a" +
      "*Email:* " + email + "%0a" +
      "*Insurance:* " + insurance + "%0a" +
      "*Message:* " + message +
      "*Mobile Number:* " + Contactnumber +
      "*Location:* " + Location +
      "%0a%0a" +
      "";
  
    window.open(url, '_blank').focus();
  }