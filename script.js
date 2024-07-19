$(function () {
  $("#pythontabs").tabs().css("height", "100%");
});
$(function () {
  $("#dictionary").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#oops").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#lambdafunction").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#listcomprehension").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#mfrfuntion").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#fileHandling").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#taskGiven").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#mysqlcontent").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#htmlcontentID").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#javaScriptcontent").accordion({
    heightStyle: "content",
  });
});

function checkgeo() {
  var show = "Geo Location Not Supported";
  if (window.navigator.geolocation) {
    show = "Supported";
  }
  alert(show);
}
function showpoistion() {
  if (window.navigator.geolocation) {
    var demo = window.navigator.geolocation;
    demo.getCurrentPosition(currentposiFunc);
    function currentposiFunc(position) {
      document.getElementById("locID").innerHTML =
        "Latitude : " +
        position.coords.latitude +
        " Longitude : " +
        position.coords.longitude;
    }
  }
}
function getlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(positionfunc, showerr);
  } else {
    alert("Sorry Your Browser does not Support Geolocation API");
  }
  function positionfunc() {
    lati = 19.1157;
    longi = 72.849;
    var latlong = new google.maps.LatLng(lati, longi);
    var myopt = {
      center: latlong,
      zoom: 15,
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var maps = new google.maps.Map(document.getElementById("mapID"), myopt);
  }
  function showerr(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }
}

var a = Array(10, 20);
function insert() {
  user = document.getElementById("fetch").value;
  document.getElementById("output").innerHTML =
    "Elment " + a.push(eval(user)) + " Successfully Inserted \n";
  document.getElementById("fetch").value = "";
}
function display() {
  document.getElementById("output").innerHTML = "";
  for (var b = 0; b < a.length; b++) {
    document.getElementById("output").innerHTML +=
      "Array Index " + b + " is " + a[b] + "\n";
  }
}
var showemplyeebtn = document.getElementById("loginBTN");
var employeContent = document.getElementById("employeContentID");
showemplyeebtn.addEventListener("click", function () {
  var username = document.getElementById("naam").value;
  if (username == "Aseef" || employeContent.style.display === "none") {
    employeContent.style.display = "block";
  } else {
    employeContent.style.display = "none";
  }
});
function calc() {
  let pagar = document.getElementById("sal").value;
  let hra = (10 / 100) * pagar;
  document.getElementById("house").value = hra;

  let khacha = (7 / 100) * pagar;
  document.getElementById("comm").value = khacha;

  let pf = (3 / 100) * pagar;
  document.getElementById("pf").value = pf;

  let net = eval(pagar) + eval(hra) + eval(khacha) - eval(pf);
  document.getElementById("total").value = net;

  if (net >= 25000 && net <= 50000) {
    document.getElementById("Grad").value = "A";
  } else if (net >= 15000 && net < 25000) {
    document.getElementById("Grad").value = "B";
  } else if (net <= 15000 && net >= 10000) {
    document.getElementById("Grad").value = "C";
  } else {
    document.getElementById("Grad").value = "A+";
  }
}

function spherefun() {
  var radiu = parseInt(document.getElementById("sprinput").value);
  var length = document.getElementById("lengthinputID").value;
  var breath = document.getElementById("breathinputID").value;
  if (isNaN(radiu) || radiu === "") {
    function areaofrectangle(L, B) {
      var area = L * B;
      return area;
    }
    var a = areaofrectangle(length, breath);
    document.getElementById("sphereOUTPUT").innerHTML =
      `<b>AreaOfRectangle(${length},${breath}) :<b>` + a;
  } else {
    var v = (4 / 3) * Math.PI * radiu ** 3;
    document.getElementById("sphereOUTPUT").innerHTML =
      "<b>Volume of Sphere : " + Math.floor(v) + " cm**3</b><br>";
    function afc(r) {
      var area = Math.PI * r ** 2;
      document.getElementById("sphereOUTPUT").innerHTML +=
        `AreaOfCircle(${radiu}) : ` + area + "\n";
    }
    afc(radiu);
  }
}

class objectExample {
  constructor(firstName, experience, age) {
    this.firstName = firstName;
    this.experience = experience;
    this.age = age;
  }
  say_hello() {
    alert(
      "Name :" +
        this.firstName +
        "\n Experience in : " +
        this.experience +
        "\n Her age is :" +
        this.age
    );
  }
}
var abc = new objectExample("Kulsum Khan", "Tellecaller", "19");
function threadBTN() {
  setTimeout(() => {
    document.getElementById("threadOutput").innerHTML += "first line <br>";
  }, 3000);

  setTimeout(() => {
    document.getElementById("threadOutput").innerHTML +=
      "second line <br>please wait... to see output <br>";
  }, 0);
  document.getElementById("threadOutput").innerHTML += "third line <br>";
}
document.querySelectorAll(".currentTab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".currentTab").forEach((otherButton) => {
      otherButton.style.backgroundColor = "black";
    });
    button.style.backgroundColor = "white";
  });
});

var app = angular.module("MyApp", ["ngRoute"]);
app.factory("Matha", function () {
  var factobj = {};
  factobj.multiply = function (a) {
    return a * a;
  };
  return factobj;
});

app.service("Calservice", function () {
  this.cube = function (a) {
    return a * a * a;
  };
});

app.constant("pi", "3.14");

app.directive("myCustomer", function () {
  return {
    restrict: "E",
    scope: {
      customerInfo: "=info",
    },
    templateUrl: "my-customer.html",
  };
});
app.directive("asfKhan", function () {
  return {
    restrict: "A",
    template:
      "<b>Hello AngularJS!!</b>" +
      "<h6>I am originated from Custom Directive</h6>",
  };
});

app.directive("loanDetailForm", function ($templateCache, $compile) {
  var getTemplate = function (loanType) {
    var t;
    switch (loanType) {
      case "1":
        t = $templateCache.get("template1");
        break;
      case "2":
        t = $templateCache.get("template2");
        break;
      default:
        t = "<div>No Loan Type</div>";
    }
    return t;
  };
  return {
    restrict: "E",
    scope: {
      loan: "=",
    },
    link: function (scope, elem, attrs) {
      scope.$watch("loan.loanType", function (newVal) {
        elem.html(getTemplate(newVal));

        $compile(elem.contents())(scope);
      });
    },
  };
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/internship", {
      template: `<h1>Aptech Learning</h1>
      <p>
          Click On This 
      </p>`,
    })
    .when("/courses", {
      template: `<h1>Course Offerred</h1>
      <p>
          <u>
              <li>Machine</li>
              <li>PWD</li>
              <li>Artificial Intelligence</li>

          </u>    
      </p>
      `,
    });
});

app.controller(
  "MyController",
  function ($scope, $sce, $http, Matha, Calservice, pi) {
    $scope.nao = {
      name: "Naomi",
      address: "1600 Amphitheatre",
    };
    $scope.ase = {
      name: "Aseef",
      address: "Seatle Dal Taxus Fronze Mahaf Street",
    };

    $scope.model = {
      loanType: "1",
      attributeA: "Aseef",
      attributeB: "50 Case",
      attributeC: "100 Count",
    };
    $scope.sqaure = function () {
      $scope.result = Matha.multiply($scope.number);
    };
    $scope.cube = function () {
      $scope.result = Calservice.cube($scope.number);
    };

    $scope.area = function (a) {
      $scope.result = pi * ($scope.number * $scope.number);
    };

    $scope.selectedTab = 2;

    $scope.selectTab = function (tab) {
      $scope.selectedTab = tab;
    };

    $scope.addkrdo = function () {
      var add = $scope.no1 + $scope.no2;
      $scope.calcresult = "Addition is " + add;
    };
    $scope.subkrdo = function () {
      $scope.calcresult = "Subraction is " + ($scope.no1 - $scope.no2);
    };
    $scope.multikrdo = function () {
      $scope.calcresult = "Multiply is " + $scope.no1 * $scope.no2;
    };
    $scope.divkrdo = function () {
      if ($scope.no2 !== 0) {
        $scope.calcresult = "Division is " + $scope.no1 / $scope.no2;
      } else {
        $scope.calcresult = "Cannot Divide by Zero";
      }
    };
    $scope.age = function () {
      var age = prompt("Enter Your Age!");
      if (age >= 18) {
        $scope.eligibResult = "Eligible for Vote";
      } else {
        $scope.eligibResult = "Not Eligible for Vote";
      }
    };
    $scope.WLFTable = function () {
      $scope.tableResult = "";
      var i = 1;
      while (i <= 10) {
        let c = $scope.tableinput * i;
        $scope.tableResult += $scope.tableinput + " x " + i + " = " + c + "\n";
        i++;
      }
    };
    $scope.WLFPerfect = function () {
      var b = 1;
      var sum = 0;
      while (b < $scope.pspinput) {
        if ($scope.pspinput % b === 0) {
          sum = sum + b;
        }
        b++;
      }
      if (sum === $scope.pspinput) {
        $scope.pspoutput = $scope.pspinput + " is a Perfect Number";
      } else {
        $scope.pspoutput = $scope.pspinput + " is not a Perfect Number";
      }
    };
    $scope.WLFprime = function () {
      var b = 2;
      while (b < $scope.pspinput) {
        if ($scope.pspinput % b === 0) {
          $scope.pspoutput = $scope.pspinput + " is not a Prime Number";
          break;
        }
        b++;
      }
      if (b === $scope.pspinput) {
        $scope.pspoutput = $scope.pspinput + " is a Prime Number";
      }
    };
    $scope.WLFpalin = function () {
      var a = $scope.pspinput;
      var b = 0;
      while (a > 0) {
        var c = a % 10;
        b = b * 10 + c;
        a = Math.floor(a / 10);
      }
      if (b === $scope.pspinput) {
        $scope.pspoutput = $scope.pspinput + " is a Palindrome Number";
      } else {
        $scope.pspoutput = $scope.pspinput + " is not a Palindrome Number";
      }
    };
    $scope.WLFtwinprime = function () {
      var b = 2;
      while (b < $scope.pspinput) {
        if ($scope.pspinput % b === 0) {
          $scope.pspoutput = $scope.pspinput + " is not a Twin Prime Number";
          break;
        }
        b++;
      }
      if (b === $scope.pspinput) {
        $scope.pspoutput = $scope.pspinput + " is a Twin Prime Number";
      }
    };
    $scope.WLFreverse = function () {
      var a = $scope.pspinput;
      var b = 0;
      while (a > 0) {
        var c = a % 10;
        b = b * 10 + c;
        a = Math.floor(a / 10);
      }
      $scope.pspoutput = "Reverse of " + $scope.pspinput + " is " + b;
    };
    $scope.WLFfactor = function () {
      $scope.pspoutput = "";
      var b = 1;
      while (b < $scope.pspinput) {
        if ($scope.pspinput % b === 0) {
          $scope.pspoutput += b + " ";
        }
        b++;
      }
    };
    $scope.WLFfactorial = function () {
      var b = 1;
      var fact = 1;
      while (b <= $scope.pspinput) {
        fact = fact * b;
        b++;
      }
      $scope.pspoutput = "Factorial of " + $scope.pspinput + " is " + fact;
    };
    $scope.FLsna = function () {
      var sum = 0;
      for (var b = 0; b < 5; b++) {
        var a = prompt("Enter Any Five Number!");
        sum = sum + eval(a);
      }
      var avg = sum / 5;
      $scope.FLoutput = "Sum is " + sum + "\n" + "Average is " + avg;
    };
    $scope.list_q1_result = [];
    $scope.list_q1_output_btn = function () {
      if ($scope.list_user_input && $scope.list_q1_result.length < 5) {
        $scope.list_q1_result.push($scope.list_user_input);
        $scope.list_user_input = "";
      } else if ($scope.list_q1_result.length >= 5) {
        $scope.list_q1_result = "List is full Cannot add more than 5 items.";
      }
    };
    $scope.list_q2_result = [12, 13, 14, 16];
    $scope.list_q2_output_btn = function () {
      var dummy = [12, 13, 14, 16];
      if ($scope.list_user_x == undefined && $scope.list_user_y == undefined) {
        $scope.list_q2_result = "Empty index and element";
      } else if ($scope.list_user_x >= 0 && $scope.list_user_x < dummy.length) {
        dummy[$scope.list_user_x] = $scope.list_user_y;
        $scope.list_q2_result = dummy;
      } else {
        $scope.list_q2_result = "Index out of range ";
      }
    };
    $scope.list_q3_output_btn = function () {
      var q2 = [12, 13, 14, 16];
      var dummy = [21, 22, 23, 24, 25];
      dummy.forEach(function (element) {
        q2.push(element);
      });
      $scope.list_q3_result = q2;
    };
    $scope.list_q4_output_btn = function () {
      let q4 = [12, 13, 14, 16, 21, 22, 23, 24, 25];
      // q4[::2] not in javascript
      $scope.list_q4_result = [];
      for (let i = 0; i < q4.length; i += 2) {
        $scope.list_q4_result.push(q4.slice(i, i + 1)[0]);
      }
    };
    $scope.list_q5_output_btn = function () {
      let q5 = [32, 6, 65, 47, 5, 8, 69, 8, 89, 97, 6, 7];
      // q4[4::-6] not in javascript
      $scope.list_q5_result = "[" + q5 + "] = " + "[" + q5.slice(4, 7) + "]";
    };
    $scope.oops_q1_output_btn = function () {
      class Furniture {
        constructor() {
          this.height = "8ft";
          this.width = 400;
          this.colour = "Brown";
        }
        display() {
          return (
            "Height: " +
            this.height +
            ", Width: " +
            this.width +
            ", Colour: " +
            this.colour
          );
        }
      }

      class Chair extends Furniture {
        constructor() {
          super();
          this.legs = " Four legs";
        }
      }
      let obj = new Chair();
      $scope.oops_q1_result = obj.display() + obj.legs;
      $scope.oops_q1_result2 = $sce.trustAsHtml(`
        <h2>Python Output</h2>
        Class furniture: <br>
                def __init__(self): <br>
                        self. height = "8ft"  <br>
                        self. width = 784.5 <br>
                        self.colour = "Brown". <br>
                def display (self): <br>
                        print ("Weight is:”, self.height) <br>
                        print ("Width is:”, self.width) <br>
                        print ("colour is:”, self.colour)  <br>
        class Chair (Furniture): <br>
                legs = "fourlegs". <br>
        obj = Chair(). <br>
        Obj.display <br>
        print(obj, legs) 
        
        `);
    };
    $scope.oops_q2_output_btn = function () {
      $scope.oops_q2_result = $sce.trustAsHtml(`
        <h2>Python Output</h2>
        -> from Area import area  <br>
            Class Rectangle: <br>
            def input(self): <br>
            Self. length = int (input ("Enter length: ") <br>
            Self. breadth = int (input ("Enter breadth: “)  <br>
            def display(self): <br>
            print ("Area of Rectangle is: ", area(self.length, self.breadth)) <br>
            obj = Rectangle() <br>
            obj. input () <br>
            obj. display () <br>

        `);
    };
    $scope.oops_q3_output_btn = function () {
      $scope.oops_q3_result = $sce.trustAsHtml(`
        <h2>Python Output</h2>
        ->From Area import circle.  <br>
          def input (self): <br>
          self. radius = int (input ("Enter Radius": ")) <br>
          def display (self): <br>
          print(“Area of Circle is : ”,Circle(self.radius)) <br>
          obj = Circle() <br>
          obj. input() <br>
          obj. display () <br>
        `);
    };
    $scope.oops_q4_output_btn = function () {
      $scope.oops_q4_result = $sce.trustAsHtml(`
        <h2>Python Output</h2>
       Class Bank: <br>
      def __init__(self): <br>
      Self. bal = 10000 <br>
      Self. account = int (input ("Account Number:”) <br>
      Self. name = input ("Account Holder Name:”) <br>
      Self. balance = print ("Available Balance:", self. bal) <br>
      det deposit (self, amt = 0): <br>
      self. bal = amt + self. bal <br>
      print ("Currently Available Balance is ", self. bal) <br>
      def withdraw (self, amt = 0): <br>
      totalBalance = self.bal - amt <br>
      print ("Currently Available balance: ”,totalBalance <br>
      def statement(self): <br>
      b = int (input (“Enter Amount:”))
      a = input (“You want to depositor or withdraw money? / D(W)\n)”) <br>
      if a == “D” or a == “d”: <br>
      obj.deposit(b) <br>
      elseif a == “W” or a == “w”: <br>
      obj.withdraw(b) <br>
      print (self.account, “\n”, self.name, “\n”, self.bal, “\n”) <br>
      obj = Bank () <br>
      obj.statement() <br>
        `);
    };
    $scope.count = 0;
    $scope.mainKeys = [];
    $scope.dictbtn1 = function () {
      if ($scope.count < 5) {
        if (!$scope.dictOutputq1) {
          $scope.dictOutputq1 = {};
        }
        var mainkey = "p" + Object.keys($scope.dictOutputq1).length;
        $scope.dictOutputq1[mainkey] = {};
        $scope.dictOutputq1[mainkey]["Name"] = $scope.dictInputq1_a;
        $scope.dictOutputq1[mainkey]["Age"] = $scope.dictInputq1_b;
        $scope.dictOutputq1[mainkey]["Birthdate"] = $scope.dictInputq1_c;
        $scope.count++;
        $scope.mainKeys.push(mainkey);
        if ($scope.count === 5) {
          document.getElementById("dictbtn1").disabled = true;
          $scope.dictOutputq1 = "Only Five Person Allowed";
        }
      }
      $scope.lastMainKey = mainkey;
    };

    $scope.dictbtn2 = function () {
      if (
        $scope.dictInputq1_a === undefined &&
        $scope.dictInputq1_b === undefined &&
        $scope.dictInputq1_c === undefined
      ) {
        $scope.dictOutputq2 = "First Add Person then do this Question";
      } else {
        if ($scope.lastMainKey) {
          $scope.dictOutputq2 = $scope.mainKeys;
        } else {
          $scope.dictOutputq2 = "No person added yet";
        }
      }
    };

    $scope.dictbtn3 = function () {
      if (
        $scope.dictInputq1_a === undefined &&
        $scope.dictInputq1_b === undefined &&
        $scope.dictInputq1_c === undefined
      ) {
        $scope.dictOutputq3 = "First Add Person then do this Question";
      } else {
        if ($scope.lastMainKey) {
          if ($scope.mainKeys.includes("p2")) {
            $scope.dictOutputq3 = $scope.dictOutputq1["p2"];
          } else {
            $scope.dictOutputq3 = "p2 key does not exist";
          }
        } else {
          $scope.dictOutputq3 = "No person added yet";
        }
      }
    };

    $scope.lambdabtnq3 = () => {
      $scope.lambdaoutputq3 =
        $scope.lambdainputq3 < 0
          ? "Negative Number"
          : $scope.lambdainputq3 === undefined
          ? "Please enter your age"
          : "Positive Number";
    };
    $scope.lambdabtnq4 = () => {
      $scope.lambdaoutputq4 =
        $scope.lambdainputq4_a > $scope.lambdainputq4_b
          ? `${$scope.lambdainputq4_a} is Big`
          : typeof $scope.lambdainputq4 === "number"
          ? "Please enter a number"
          : `${$scope.lambdainputq4_b} is Big`;
    };
    $scope.lambdabtnq5 = () => {
      $scope.lambdaoutputq5 =
        $scope.lambdainputq5 === undefined
          ? "Please enter a number"
          : $scope.lambdainputq5 % 2 === 0
          ? `${$scope.lambdainputq5} is Even Number`
          : `${$scope.lambdainputq5} is Odd`;
    };

    $scope.lambdabtnq6 = () => {
      $scope.lambdaoutputq6 =
        typeof $scope.lambdainputq6 === "number"
          ? $scope.lambdainputq6 ** 3
          : "Please enter a number";
    };
    $scope.lambaExamplebtn = () => {
      $scope.lambaOutput =
        $scope.lambdaInput < 18
          ? "You are not eligible to vote"
          : $scope.lambdaInput === undefined
          ? "Please enter your age"
          : "You are eligible to vote";
      $scope.lambaOutputExplain =
        "->age = lambda a: “You are Not Eligible” if a<18 else “You are Eligible”  print(age (17)) Output: you are not eligible";
    };
    $scope.check = function (ABC) {
      // if(ABC>=18)
      //     $scope.ans=true
      // else
      //     $scope.ans=false
      // return $scope.ans;
      return ($scope.ans = ABC >= 18 ? true : false);
    };
    $scope.task = [];
    $scope.Add = function () {
      if (
        !$scope.task.some((item) => item.user === $scope.user) &&
        $scope.user
      ) {
        $scope.task.push({ user: $scope.user });
        $scope.user = "";
        $scope.duplicatetask = "";
      } else {
        $scope.duplicatetask = "Duplicate Entry or empty Input! ";
      }
    };

    $scope.firstNameB = [];
    $scope.lastNameB = [];
    $scope.titleB = [];
    $scope.empidB = [];
    $scope.salaryB = [];
    $scope.deletebtnB = [];
    $scope.deletebtnClicked = function () {
      $scope.firstNameB.pop({ firstNameA: $scope.firstNameA });
      $scope.lastNameB.pop({ lastNameA: $scope.lastNameA });
      $scope.titleB.pop({ jobTitleA: $scope.jobTitleA });
      $scope.empidB.pop({ employeeID: $scope.employeeIDA });
      $scope.salaryB.pop({ empSalaryA: $scope.empSalaryA });
      $scope.deletebtnB.pop(
        ($scope.deletBTN = $sce.trustAsHtml(
          `<button id="deletebtnID" >Delete</button>`
        ))
      );
    };
    $scope.ngrepeatTaskbtn = function () {
      if (
        $scope.firstNameA == undefined ||
        $scope.lastNameA == undefined ||
        $scope.jobTitleA == undefined ||
        $scope.employeeIDA == undefined ||
        $scope.empSalaryA == undefined
      ) {
        $scope.duplicateID = "Duplicate Entry or empty Input! ";
      }
      if (
        (!$scope.empidB.some(
          (item1) => item1.employeeID === $scope.employeeIDA
        ) &&
          $scope.employeeIDA) ||
        (!$scope.firstNameB.some(
          (item2) => item2.firstNameA === $scope.firstNameA
        ) &&
          $scope.firstNameA) ||
        (!$scope.lastNameB.some(
          (item3) => item3.lastNameA === $scope.lastNameA
        ) &&
          $scope.lastNameA) ||
        (!$scope.titleB.some((item4) => item4.jobTitleA === $scope.jobTitleA) &&
          $scope.jobTitleA) ||
        (!$scope.salaryB.some(
          (item5) => item5.empSalaryA === $scope.empSalaryA
        ) &&
          $scope.empSalaryA)
      ) {
        $scope.firstNameB.push({ firstNameA: $scope.firstNameA });
        $scope.lastNameB.push({ lastNameA: $scope.lastNameA });
        $scope.titleB.push({ jobTitleA: $scope.jobTitleA });
        $scope.empidB.push({ employeeID: $scope.employeeIDA });
        $scope.salaryB.push({ empSalaryA: $scope.empSalaryA });
        $scope.deletebtnB.push(
          ($scope.deletBTN = $sce.trustAsHtml(
            `<button id="deletebtnID" >Delete</button>`
          ))
        );
        $scope.duplicateID = "";
      } else {
        $scope.duplicateID = "Duplicate Entry or empty Input! ";
      }
    };
    $scope.getapi = function () {
      var b = $http.get(
        "https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian&apiKey=40f99deab257456ba0c6076670e916e2"
      );
      b.then(function (response) {
        var obj = response.data;
        $scope.text = JSON.stringify(obj, undefined, 1);
      });
      b.catch(function (error) {
        $scope.text = [];
      });
    };

    var a = $http.get("employee.json");
    a.then(function (response) {
      $scope.employee = response.data;
    });
    a.catch(function (error) {
      $scope.employee = [];
    });
    $scope.person = { salary: 25000 };
    $scope.today = new Date();
    $scope.myArr = ["ABc", "Xyz", "123", "789"];

    $scope.finalsal = function () {
      return (
        eval($scope.ans) -
        eval($scope.insurance) -
        eval($scope.pf) -
        eval($scope.gst) +
        eval($scope.default)
      );
    };
  }
);

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
function glow() {
  document.getElementById("btn").style.backgroundColor = "orange";
}
function stopglow() {
  document.getElementById("btn").style.backgroundColor = "yellowgreen";
}

function store() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    var username = document.getElementById("user").value;
    localStorage.setItem("user", username);
    document.getElementById("user").value = "Click Below to Test";
  } else {
    alert("Your Browser Doesn't support storage");
  }
}

function retrieve() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    var a = localStorage.getItem("user");
    document.getElementById("user").value = a;
  } else {
    alert("Incompatible Browser!");
  }
}
function remove() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    var a = localStorage.removeItem("user");
    document.getElementById("user").value = "";
  } else {
    alert("Incompatible Browser!");
  }
}
$(document).ready(function () {
  $("#btnsubmit").click(function () {
    var ans = $('input[type="checkbox" ]:checked');
    if (ans.length > 0) {
      var ansString =
        ans.length +
        " CheckBox Checked" +
        " " +
        ans.val() +
        "<=Thats why we use each() to traverse each element to GUI<br>  ";
      ans.each(function () {
        ansString = ansString + " " + $(this).val() + "<br>";
      });
      $("#divID").html(ansString);
    } else {
      $("#divID").html("No CheckBox Checked");
    }
  });
});
$(document).ready(function () {
  $(".check").css("box-shadow", "1px 1px 5px 1px red");
});
$(document).ready(function () {
  $("#spanID").html("Mark element length is " + $("mark").length);
});

$(document).ready(function () {
  $("#dd").mouseover(function () {
    $("mark").toggle(1000);
    $("mark").css("font-size", "xx-large");
    $("td").css("color", "red");
  });
});
const text = document.querySelector(".profiletext p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (cahr, i) => `<span style="transform:rotate(${i * 15.1}deg)">${cahr}</span>`
  )
  .join("");
