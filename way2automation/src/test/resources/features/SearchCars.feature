@Search-Cars 
Feature: Acceptance testing to validate Search cars page is working properly. 
	In order to validate that the search cars page is working fine 
	we will do the accepatance testing

@Search_cars-Positive
Scenario: Validate search cars page 
	Given I am on the Home Page "https://www.carsguide.com.au" of Carguide Website 
	When I move to  menu 
		
		|Menu			|
		|buys and sell	|
		|reviews		|
		
	And click on "Search Cars" link
	And select car brand as "BMW" from AnyMake dropdown
	And select car model as "1 Series" fromSelectModel dropdown
	And select car location as "ACT - All" fromSelectLocation dropdown
	And select car price as "$1,000" from price dropdown
	And Click on Find_My_NextCar button
	Then I see list of searched cars
	And the page title should be "Bmw 1 Series Under 1000 for Sale ACT | carsguide"

