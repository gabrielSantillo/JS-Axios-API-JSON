/* This function add the name and picture of a random animal */
function randomAnimal(details) {
    /* this function add a ramdom animal and name if by trying to access the API was successful */
  function post_success(response) {
    /* print in the page the name and image */
    document.body.insertAdjacentHTML(
      `beforeend`,
      `
        <h1>${response[`data`][`name`]}</h1>
        <img src="${response[`data`][`image_link`]}">
        `
    );
  }
/* if was not successful, will print a error message */
  function post_failure(error) {
    /* print the error message */
    document.body.insertAdjacentHTML(
      `afterbegin`,
      `
    <h1>ERROR</h1>`
    );
  }

  /* these line of code request the access to the api */
  axios
    .request({
      url: `https://zoo-animal-api.herokuapp.com/animals/rand`,
    })
    /* if successful, call the function post_success */
    .then(post_success)
    /* if not successful, call the function post_failure */
    .catch(post_failure);
}

/* gets the button in the page */
let button = document.querySelector(`button`);
/* after being clicked, call the function that will print a random animal in the page*/
button.addEventListener(`click`, randomAnimal);
