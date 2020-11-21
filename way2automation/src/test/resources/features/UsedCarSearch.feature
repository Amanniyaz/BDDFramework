@Used-Search-Cars 
Feature:  
	Acceptance testing to validate Used Search cars page is working properly. 
	In order to validate that the used search cars page is working fine 
	we will do the accepatance testing

@Used-Search_Cars-Positive 
Scenario: Validate used search cars page 
	Given I am on the Home Page "https://www.carsguide.com.au" of Carguide Website 
	When I move to  menu 
	
		|Menu			|
		|buys and sell	|
		|reviews		|
		
	And click on "Used" link Used Search Car Page
	And select car brand as "Audi" from AnyMake dropdown Used Search Car Page
	And Select car model as Used Search Car Page
		|Model	|
		|A4		|
		|A3   	| 
	
	And select car location as "NSW - Sydney" fromSelectLocation dropdown Used Search Car Page
	And select car price as "$3,000" from price dropdown Used Search Car Page
	And Click on Find_My_NextCar button Used Search Car Page
	Then I see list of searched cars on Used Search Car Page
	And the page title should be "Used Audi A4 Under 3000 for Sale Sydney NSW | carsguide"