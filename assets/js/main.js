function select(el) {
    return document.querySelector(el)
}
const URL= ""       //the url for the fetch requests goes here

/**handle register */
const register = select('#register')
register.addEventListener('click', ()=>{
    console.log("register clicked");
})

/**handle login */
const login =select('#login')
login.addEventListener('click', ()=>{
    console.log("login clicked");
})

/**get form elements */
const email = select('#email')
const username = select('#name')
const subject = select('#subject')
const message = select('#subject')

const form = select('.contact-form');
form.onsubmit= (e)=>{
    e.preventDefault() //prevents form from reloading when submit btn is clicked
    
    /**get the form input data  */
    const email_value = email.value
    const name_value = username.value
    const subject_value = subject.value
    const message_value = message.value

    /**send the data to the backend using fetch post method */
    fetch(`${URL}/hire-us`, {       //the route to handle the request final url will look like "https://example.com/hire-us"
        method: 'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({           // send the data to the backend in json format
            email_value,
            name_value,
            subject_value,
            message_value
        })
    })
    .then(response=>response.json())    //convert the response from the backend to json for ease of working with
    .then(data=>console.log(data))      //log data for test purposes

}
