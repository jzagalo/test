

 angular.module("MyApp", [])

//Controllers control how data is manipulated while 
//Directives control how data is presented on the screen
.controller('ShieldCtrl', function($scope)
{	
		$scope.shieldNames = [];

		this.addReigns = function() 
		{
			$scope.shieldNames.push('Roman Reigns : Juggernaut');
		}
		
		this.addCollins = function() 
		{
			$scope.shieldNames.push('Seth Rollins : Architect');
		}

		this.addAmbrose = function() 
		{
			$scope.shieldNames.push('Dean Ambrose : Lunatic Fringe');
		}	
})
.directive("theshield", function()
{	
		return {
			restrict: 'E',
			controller: 'ShieldCtrl',
			scope : {},
			link : function(scope, element, attrs)
			{	
				element.bind('mouseenter', function()
				{
					console.log(scope.shieldNames);

				});
			}
			
		}
	
})

.directive("elementrest", function()
{	
		return {
			restrict: 'E',			
			link : function()
			{	
				console.log('I am an Element restriction');
			}
			
		}
	
})
.directive("classres", function()
{	
		return {
			restrict: 'C',			
			link : function()
			{	
				console.log('I am an class restriction');
			}
			
		}
	
})
.directive("comres", function()
{	
		return {
			restrict: 'M',			
			link : function()
			{	
				console.log('I am a Comment');
			}
			
		}
	
})
.directive("restriction", function()
{	
		return {
			restrict: 'A',			
			link : function()
			{	
				console.log('I am a restriction');
			}
			
		}
	
})
// directive can take data from Controller or from another directive
.directive('reigns', function() {
  return {
  
    require : 'theshield', 
    link: function (scope, element, attrs, ShieldCtrl) {
  		ShieldCtrl.addReigns();
				   }
    }
 
})
.directive('collins', function(){
		return {
  
    require: 'theshield', 
    link: function (scope, element, attrs, ShieldCtrl) {
  		ShieldCtrl.addCollins();
				   }
    }
})
.directive('ambrose', function(){
		return	{

	require:'theshield',
	link: function (scope, element, attrs, ShieldCtrl) {
		   		ShieldCtrl.addAmbrose();
		   }
		}

})
.directive("interactiveBtn", function()
{	
		return{
			restrict: 'A',
			transclude : true,
			link : function(scope, element, attrs)
			{	
				//console.log(element);
				element.bind('mouseenter', function()
				{
					element[0].innerText = 'Roll Over';

				});

				element.bind('mouseleave', function()
				{
					element[0].innerText = 'Roll Out';

				});
			}
			
		}
	
})



.directive("walterwhite", function()
{	

	return {
		restrict: 'E',
		transclude: true,
		link : function(scope, element, attrs)
			 {
			 	
			}


	}
	/*return {

		restrict:'E',
		transclude : true,
		template : '<h2> I am heisenberg </h2>'

	}*/
});