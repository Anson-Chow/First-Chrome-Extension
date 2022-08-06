let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})


function render(leads){
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target='_blank' href = ' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += 
      `<li>
        <a target='_blank' href = '${leads[i]}'> 
        ${leads[i]}
        </a>
      </li>`
  }
  ulEl.innerHTML = listItems; 
}

deleteBtn.addEventListener("dblclick", function(){
  console.log("double")
  localStorage.clear()
  myLeads = []
  render(myLeads) //Clear the DOM, Deletes because renderLeads is an empty array now because of myLeads.length is 0
})


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = ""

  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

});


// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked from addEventListener")
// })

// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.parse(myLeads) Parse makes it from string to array, fetches 
// myLeads.push("1123")
// myLeads = JSON.stringify(myLeads) Stringify makes it from array to string
// console.log (typeof myLeads)

// // 1. Turn the myLeads string into an array
// // 2. Push a new value to the array
// // 3. Turn the array into a string again
// // 4. Console.log the string using typeof to verify that it's a string


//DOM manipulation caomes with a cost, 
//you can do it 3 times inside w innerHTML or 1 time outside

// ulEl.innerHTML +=  "<li>" + myLeads[i] + "</li> "
// const li =  document.createElement("li")
// li.textContent = myLeads [i]
// ulEl.append(li)

//DOM


// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// localStorage.setItem("Number", "two")
// console.log(localStorage.getItem("Number"))
// localStorage.clear()

/**RECAP
 * Const
 * addEventListener()
 * innerHTML
 * input value
 * function parameters
 * template strings
 * local storage
 * The JSON object
 * objects in arrays
 */
