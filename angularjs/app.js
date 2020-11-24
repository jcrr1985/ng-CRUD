var app = angular.module("myModule", []);

app.controller("firstCtrl", function($scope) {

  $scope.$on('myEvent', function(event, data) {
     $scope.arr = data.fromServer.results;
     console.log("arr", $scope.arr)
  });

  $scope.back = function(){
   $scope.arr = [];
  }

$scope.delPerson = function(person,$index){
  $scope.arr.forEach( personInArray => {
    if(personInArray.id == person.id){
      $scope.arr.splice($index,1)
      console.log($index)
    }
  });
}

$scope.newNameFirst;
$scope.newNameLast;
$scope.p;

$scope.editPerson = function(person, $index){
  $scope.newNameFirst = ""
  $scope.newNameLast = ""
  $scope.p = person
}

$scope.reWriteUser = function(){
  $scope.p.name.first= $scope.newNameFirst;
  $scope.p.name.last= $scope.newNameLast;

}

});


app.controller("secondCtrl", function($scope) {
  $scope.fromServer;   
  $scope.submit = async ()=> {  
  	let one = await fetch('https://randomuser.me/api/?results=9')
    let two = await one.json();   

    $scope.$emit('myEvent', {
      fromServer: two
    });
    
  }

});

