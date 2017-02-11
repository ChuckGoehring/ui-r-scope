# ui-r-scope
Checking scope with ui_router views and more than one reference to the same controller.

Using same or different value or controllerAs doesn't cause controller instance (variables) to be shared.   
So, services, directives and hidden input items are the primary solutions.

**use-parent-controller branch**  
2 views left and right that share data and code via a parent controller with controllerAs "base". This solution is best if you have an outer view as well as the shared data/functionality

**use-service branch**  
2 views left and right that share data and code via a service "Base". This solution is bare-bones: just sharing data and functionality, and more testable. The big concern is: when data is changed in one view, "is the other view updated"? The answer is yes, but it was a surprise, i.e. the view could have just $digested itself and not the other view. The latest version of use-service proves the point: in a run function, rootstcope.stuff is updated, but using a setTimeout with a 1 second wait, so doesn't show up in the view. Once you change base.data.name, the rootscope.stuff value shows up, proving that digest starts at root and not just the immediate scope.


