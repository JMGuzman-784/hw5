// global variables
var now = new Date().getHours();

// functions
// save task in local storage
function saveTask() {
    console.log($(this).parent());

    const time = $(this).parent().attr("id");
    const task = $(this).siblings("textarea").val();

    localStorage.setItem(time, task);
}

// show current date
$("#currentDay").text(moment().format("MMM Do, YYYY"));

// Show current Time
$("#dayTime").text(moment().format("LT"));

// user clicks save button
$(".js-btn").on("click", saveTask);

// functions for every hour
function colorCode() {
  // determine what hour user is in
  if (now > 9) {
    $("#task9am").addClass("past");
  } else if (now >= 9 && now < 10) {
    // if in past hour show grey box
    $("#task9am").addClass("present");
    // if in present show lightblue box
  } else if (now < 9) {
    $("#task9am").addClass("future");
    // future box should be green
  }
  // follow same method with the next 8 hours
  if (now > 10) {
    $("#task10am").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#task10am").addClass("present");
  } else if (now < 10) {
    $("#task10am").addClass("future");
  }
  if (now > 11) {
    $("#task11am").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#task11am").addClass("present");
  } else if (now < 11) {
    $("#task11am").addClass("future");
  }
  if (now > 12) {
    $("#task12pm").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#task12pm").addClass("present");
  } else if (now < 12) {
    $("#task12pm").addClass("future");
  }
  if (now > 13) {
    $("#task1pm").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#task1pm").addClass("present");
  } else if (now < 13) {
    $("#task1pm").addClass("future");
  }
  if (now > 14) {
    $("#task2pm").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#task2pm").addClass("present");
  } else if (now < 14) {
    $("#task2pm").addClass("future");
  }
  if (now > 15) {
    $("#task3pm").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#task3pm").addClass("present");
  } else if (now < 15) {
    $("#task3pm").addClass("future");
  }
  if (now > 16) {
    $("#task4pm").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#task4pm").addClass("present");
  } else if (now < 16) {
    $("#task4pm").addClass("future");
  }
  if (now > 17) {
    $("#task5pm").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#task5pm").addClass("present");
  } else if (now < 17) {
    $("#task5pm").addClass("future");
  }
}

// functions for each hour
function nineAM() {
  // in the text area, will be the task
    var input_textarea = document.querySelector("#task9am");
    var output_div = document.querySelector("#task9am");
    var save_button = document.querySelector("#btn-9am");
    // save button to save task in text area as well as local storage
  
    save_button.addEventListener("click", updateOutput);
    // when button is clicked save text in text area
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
      // allows to text entered to be saves so when page is refresh or closed it appears with the same tasks
      output_div.textContent = input_textarea.value;
    }
}
// Repeat for the next 8 hours

function tenAM() {
    var input_textarea2 = document.querySelector("#task10am");
    var output_div2 = document.querySelector("#task10am");
    var save_button2 = document.querySelector("#btn-10am");
  
    save_button2.addEventListener("click", updateOutput2);
  
    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");
  
    function updateOutput2() {
      localStorage.setItem("content2", input_textarea2.value);
  
      output_div2.textContent = input_textarea2.value;
    }
}
  
function elevenAM() {
    var input_textarea3 = document.querySelector("#task11am");
    var output_div3 = document.querySelector("#task11am");
    var save_button3 = document.querySelector("#btn-11am");
  
    save_button3.addEventListener("click", updateOutput3);
  
    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");
  
    function updateOutput3() {
      localStorage.setItem("content3", input_textarea3.value);
  
      output_div3.textContent = input_textarea3.value;
    }
}

function twelvePM() {
    var input_textarea4 = document.querySelector("#task12pm");
    var output_div4 = document.querySelector("#task12pm");
    var save_button4 = document.querySelector("#btn-12pm");
  
    save_button4.addEventListener("click", updateOutput4);
  
    output_div4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");
  
    function updateOutput4() {
      localStorage.setItem("content4", input_textarea4.value);
  
      output_div4.textContent = input_textarea4.value;
    }
}

function onePM() {
    var input_textarea5 = document.querySelector("#task1pm");
    var output_div5 = document.querySelector("#task1pm");
    var save_button5 = document.querySelector("#btn-1pm");
  
    save_button5.addEventListener("click", updateOutput5);
  
    output_div5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");
  
    function updateOutput5() {
      localStorage.setItem("content5", input_textarea5.value);
  
      output_div5.textContent = input_textarea5.value;
    }
}
  
  
function twoPM() {
    var input_textarea6 = document.querySelector("#task2pm");
    var output_div6 = document.querySelector("#task2pm");
    var save_button6 = document.querySelector("#btn-2pm");
  
    save_button6.addEventListener("click", updateOutput6);
  
    output_div6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");
  
    function updateOutput6() {
      localStorage.setItem("content6", input_textarea6.value);
  
      output_div6.textContent = input_textarea6.value;
    }
}
  
  
function threePM() {
    var input_textarea7 = document.querySelector("#task3pm");
    var output_div7 = document.querySelector("#task3pm");
    var save_button7 = document.querySelector("#btn-3pm");
  
    save_button7.addEventListener("click", updateOutput7);
  
    output_div7.textContent = localStorage.getItem("content7");
    input_textarea7.value = localStorage.getItem("content7");
  
    function updateOutput7() {
      localStorage.setItem("content7", input_textarea7.value);
  
      output_div7.textContent = input_textarea7.value;
    }
}
  
  
function fourPM() {
    var input_textarea8 = document.querySelector("#task4pm");
    var output_div8 = document.querySelector("#task4pm");
    var save_button8 = document.querySelector("#btn-4pm");
  
    save_button8.addEventListener("click", updateOutput8);
  
    output_div8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");
  
    function updateOutput8() {
      localStorage.setItem("content8", input_textarea8.value);
  
      output_div8.textContent = input_textarea8.value;
    }
}
  
  
function fivePM() {
    var input_textarea9 = document.querySelector("#task5pm");
    var output_div9 = document.querySelector("#task5pm");
    var save_button9 = document.querySelector("#btn-5pm");
  
    save_button9.addEventListener("click", updateOutput9);
  
    output_div9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");
  
    function updateOutput9() {
        localStorage.setItem("content9", input_textarea9.value);
        
        output_div9.textContent = input_textarea9.value;
    }
}

// function hours and color coding each section
colorCode();
nineAM();
tenAM();
elevenAM();
twelvePM();
onePM();
twoPM();
threePM();
fourPM();
fivePM();