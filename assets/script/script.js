var teachers = [
  "Dr. Mohammed Humayun Kabir",
  "Md. Javed Hossain",
  "Dr. Md. Ashadun Nobi",
  "Dr. Nahid Akter",
  "Dr. Nazia Majadi",
  "Dr. Md. Kamal Uddin",
  "Dr. Fateha Khanam Bappy",
  "Abul Kalam Azad",
  "Iftekhar Mahmud Tawhid",
  "Md. Hasnat Riaz",
  "Koushik Chandra Howlader",
  "A.R.M Mahamudul Hasan Rana",
  "Ratnadip Kuri",
  "A.Q.M Sala Uddin Pathan",
  "Sharmin Akter Milu",
  "Dr. Muhammed Yusuf Miah",
  "Dr. Newaz Mohammed Bahadur",
  "Dr. Md. Ashraful Alam",
  "Md. Saiful Alam",
  "Juganta Kumar Roy",
  "Dr. Md. Tanvir Hossain",
  "Dr. Nazia Noor",
  "Dr. Fataha Nur Robel",
  "Dr. Md. Rafiqul Islam",
  "Dr. Md. Azizul Hoque",
  "Md. Shafiul Islam",
  "Shovon Bhattacharjee",
  "Dr. Nahid Sultana",
  "Shukanta Bhowmik",
  "Mamun Sarker  ",
  "Shujit Chandra Paul",
  "Rajib Chandra Das",
  "Snahasish Bhowmik",
  "Sanchita Dewanjee",
  "Sadia Afroz",
  "Yeasmin Akter",
  "Mithun Rani Nath  ",
  "Abida Sultana",
  "Tania Sabnam Binta Monir",
  "Md. Abdus Samad Azad",
  "Fariha Afrose",
  "Khodeja Afrin",
  "Dr. Md. Ashikur Rahman Khan",
  "Dr. Abidur Rahaman",
  "Zayed- Us- Salehin",
  "Md. Saifur Rahman",
  "K. M. Aslam Uddin",
  "Dr. Mohammad Amzad Hossain",
  "Sultana Jahan Soheli",
  "Masudur Rahman",
  "Tanvir Zaman Khan",
  "Nishu Nath",
  "Apurba Adhikary",
  "Main Uddin",
  "Md. Bipul Hossain",
  "Md. Mahbubul Alam",
  "Md. Sabbir Ejaz",
  "Mohammad Kamrul Hasan",
];
teachers.sort();
var teacherRole = [
  "Chairman",
  "Chairman & Professor",
  "Chairman & Associate Professor",
  "Chairman & Assistant Professor",
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Lecturer",
  "চেয়ারম্যান",
  "অধ্যাপক",
  "চেয়ারম্যান ও অধ্যাপক",
  "চেয়ারম্যান ও সহযোগী অধ্যাপক",
  "চেয়ারম্যান ও সহকারী অধ্যাপক",
  "সহযোগী অধ্যাপক",
  "সহকারী অধ্যাপক",
  "প্রভাষক",
];
var dept = [
  "Computer Science and Telecommunication Engineering",
  "কম্পিউটার সাইন্স অ্যান্ড টেলিকমিউনিকেশন ইঞ্জিনিয়ারিং",
  "Electrical and Electronic Engineering",
  "Software Engineering",
  "Information Sciences and Library Management",
  "Applied Chemistry and Chemical Engineering",
  "Information and Communication Engineering",
  "Fisheries and Marine Science",
  "Pharmacy",
  "Microbiology",
  "Applied Mathematics",
  "Food Technology and Nutrition Science",
  "Environmental Science and Disaster Management",
  "Biotechnology and Genetic Engineering",
  "Agriculture",
  "Statistics",
  "Oceanography",
  "Zoology",
  "Soil, Water and Environment",
  "Chemistry",
  "Physics",
  "English",
  "Economics",
  "Bangladesh and Muktijuddho Studies",
  "Sociology",
  "Bangla",
  "Social Work",
  "Business Administration",
  "Management information Systems",
  "Tourism and Hospitality Management",
  "Education",
  "Educational Administration",
  "Law",
  "Political Science",
];
function autocomplete(inp, arr) {
  var currentFocus;

  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    inp.style.height = "1em";
    inp.style.height = inp.scrollHeight + "px";
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.insertBefore(a, this);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase().search(val.toLowerCase()) != -1) {
        b = document.createElement("DIV");
        //b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        var str = arr[i];
        var xx = arr[i].toLowerCase().search(val.toLowerCase());
        b.innerHTML += arr[i].substr(0, xx);
        b.innerHTML += "<strong>" + arr[i].substr(xx, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(
          xx + val.length,
          arr[i].length - (xx + val.length)
        );
        //b.innerHTML += arr[i].substr(val.length());
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          inp.style.height = "1em";
          inp.style.height = inp.scrollHeight + "px";
          closeAllLists();
        });
        a.appendChild(b);
      }
      // if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
      //   b = document.createElement("DIV");
      //   b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
      //   b.innerHTML += arr[i].substr(val.length);
      //   b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
      //   b.addEventListener("click", function (e) {
      //     inp.value = this.getElementsByTagName("input")[0].value;
      //     inp.style.height = "1em";
      //     inp.style.height = inp.scrollHeight + "px";
      //     closeAllLists();
      //   });
      //   a.appendChild(b);
      // }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
}
function autoheight(inp) {
  inp.style.height = "1em";
  inp.style.height = inp.scrollHeight + "px";
}

function remove(e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

function addRow() {
  tbody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  tr.classList.add("relative");
  tr.innerHTML = `<td class="w-16 text-center"><textarea
  class="w-full text-center"
  rows="1"
>01</textarea></td>
<td><textarea
  class="w-full"
  rows="1"
  oninput="autoheight(this)"
>Experiment Title 01</textarea></td>
<td class="w-32 border-r-0"><textarea
  class="w-full text-center"
  rows="1"
>01-05</textarea></td><td class="noprint absolute border-0 right-0"> <button onclick="remove(this)" class="noprint">X</button></td>
`;
  tbody.appendChild(tr);
}

function addRowV2() {
  tbody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  tr.classList.add("relative");
  tr.innerHTML = ` <td class="w-16 text-center"><textarea
  class="w-full text-center"
  rows="1"
>01</textarea></td>
<td class="border-r-0"><textarea
  class="w-full "
  rows="1"
  oninput="autoheight(this)"
>Experiment Title 01</textarea></td>

<td class="noprint absolute border-0 right-0"> <button onclick="remove(this)" class="noprint">X</button></td>`;
  tbody.appendChild(tr);
}

var normal = [];
if (document.getElementById("normal"))
  autocomplete(document.getElementById("normal"), normal);
if (document.getElementById("teacher-name"))
  autocomplete(document.getElementById("teacher-name"), teachers);
if (document.getElementById("teacher-role"))
  autocomplete(document.getElementById("teacher-role"), teacherRole);
if (document.getElementById("dept-name"))
  autocomplete(document.getElementById("dept-name"), dept);
if (document.getElementById("dept-name2"))
  autocomplete(document.getElementById("dept-name2"), dept);

if (document.getElementById("dateField"))
  document.getElementById("dateField").innerHTML = `Date : ${new Date()
    .toLocaleDateString("en-GB")
    .split("/")
    .join("-")}`;

const studentNameElement = document.getElementById("student-name");
if (studentNameElement) {
  studentNameElement.value = localStorage.getItem("name") || "Student Name";
}

const studentRollElement = document.getElementById("student-roll");
if (studentRollElement) {
  studentRollElement.value = `Roll: ${localStorage.getItem("id") || ""}`;
}

const studentYearTermElement = document.getElementById("student-year-term");
if (studentYearTermElement) {
  studentYearTermElement.value = `Year: ${
    localStorage.getItem("year") || "01"
  } Term: ${localStorage.getItem("term") || "01"}`;
}

if (document.getElementById("dept-name2")) {
  document.getElementById("dept-name2").value =
    localStorage.getItem("dept") || "Department";
}


