var app = angular.module('myApp',[]);
		app.controller('myCtrl',["$scope",function($scope){

					$scope.user = function(){
				alert("sbcsd");
			}

			$scope.getOptions2 = function(){
    				$scope.isZone = true;
				}
				 $scope.getOptions1 = function(){

				 	$scope.isDistrict = true;
				 }
				 $scope.getOptions3 = function(){
				 	$scope.isMuni = true;
				 }


			$scope.zones = ["Zone_I", "Zone-II", "Zone-III"];
			$scope.districts = ["RangaReddy","Medak","SangaReddy","Karimnagar","Siddipet"];
			$scope.muncipality = ["Patancheru","Greater Hyberabad","Sricilla","Dundigal"];
			$scope.phcs  = ["Gokul Nagar","Shanthi Nagar","Kukatpally","S.R.Nagar"];
			console.log($scope.zones);
			console.log($scope.districts);
			console.log($scope.muncipality);
			console.log($scope.phcs);
		
		}]);