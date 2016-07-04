(function(){
	var bsTableMoudle = angular.module('bsTable', []);
	
	bsTableMoudle.provider('bsTable', function(){
		
		/*jQuery.fn.bootstrapTable.columnDefaults = {
			halign: 'center',
			align: 'center'
		}*/
		angular.extend(jQuery.fn.bootstrapTable.columnDefaults, {
			halign: 'center',
			align: 'center'
		});
		
		this.setColumnDefaults = function(columnDefaults) {
			angular.extend(jQuery.fn.bootstrapTable.columnDefaults, columnDefaults);
		}
		
		this.$get = function(){

		}
	});
	
	bsTableMoudle.directive('bsTable', function($http){
		
		return {
			restrict: 'A',
			scope: {
				bsTable: '='
			},
			link:  function($scope, element, attrs, controllers) {
				var table = $scope.bsTable;
				element.bootstrapTable(table.options);
				element.on('click-row.bs.table', function(evt, row, $tr){
					table.row = row;
					$scope.$apply();
				});
				$scope.$watch('bsTable.params', function(newValue, oldValue){
					element.bootstrapTable('refresh');
				}, true);
				
			}
		}
	});
})();
