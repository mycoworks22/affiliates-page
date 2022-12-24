function affiliatesFilterBtns(radio_btn) {

  // get the value of the selected button
  let radio_btn_value = radio_btn.value;

  // get all the affiliate boxes
  let affiliates = document.querySelectorAll('.affiliate-box');

  //loop through all the affiliates
  for (let i = 0; i < affiliates.length; i++) {

    // if the class list contains the radio button value remove the d-none, if it doesn't add class d-none
    if(affiliates[i].classList.contains(radio_btn_value)) {
      affiliates[i].classList.remove("affiliate-box--hidden");
    }else{
      affiliates[i].classList.add("affiliate-box--hidden");
    }
  }
}

function openAffiliateModal(param) {

  // get the modal container and the modal
  const container = document.getElementById(param);
  const modal = container.querySelector('.modal-content');

  // change the display property of the modal container
  container.classList.remove('affiliate-modal--hidden');
  container.classList.add('affiliate-modal--open');

  // аdd margin to the body to avoid the content "jumping" when the scroll bar disappears and remove scroll
  document.body.style.marginRight = window.innerWidth - document.documentElement.clientWidth+"px";
  document.body.style.overflowY = 'hidden';

  // bring opacity back to 1
  container.style.opacity = "1";

  // show the modal
  setTimeout( function () {
    modal.style.transform = 'translateY(0%)';
  }, 300);
}

function closeAffiliateModal(param) {

  // get the modal container and the modal
  const container = document.getElementById(param);
  const modal = container.querySelector('.modal-content');

  // hide modal
  modal.style.transform = 'translateY(-150%)';

  // change opacity to 0
  setTimeout( function () {
    container.style.opacity = "0";
  }, 400);

  setTimeout( function () {
    // hide modal container
    container.classList.add('affiliate-modal--hidden');
    container.classList.remove('affiliate-modal--open');


    // remove body margin and add scroll
    document.body.style.marginRight = "0px";
    document.body.style.overflowY = 'scroll';

  }, 800);
}