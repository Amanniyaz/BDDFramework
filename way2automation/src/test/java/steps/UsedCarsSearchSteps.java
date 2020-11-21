package steps;

import java.util.List;

import io.cucumber.java.en.*;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.UsedCarsSearchPageActions;

public class UsedCarsSearchSteps {
	
	UsedCarsSearchPageActions usedCarsPage = new UsedCarsSearchPageActions();
	CarsGuideHomePageActions homePage = new CarsGuideHomePageActions();
	
	@And("click on {string} link Used Search Car Page")
	public void click_on_link_Used_Search_Car_Page(String string) throws InterruptedException {
	   homePage.clickOnUsedSearchCarsMenu();
		Thread.sleep(1000);	

	}

	@And("select car brand as {string} from AnyMake dropdown Used Search Car Page")
	public void select_car_brand_as_from_AnyMake_dropdown_Used_Search_Car_Page(String carBrand) throws InterruptedException {
	   usedCarsPage.selectCarMake(carBrand);
		Thread.sleep(1000);	

	}
	
	@And("Select car model as Used Search Car Page")
	public void select_car_model_as(List<String> list) throws InterruptedException {
	   
		String menu = list.get(1);
		   
		  usedCarsPage.selectCarModel(menu);
		  System.out.println("menu Selected { "+ menu +"}");
		  Thread.sleep(1000);
	}

	@And("select car location as {string} fromSelectLocation dropdown Used Search Car Page")
	public void select_car_location_as_fromSelectLocation_dropdown_Used_Search_Car_Page(String carLocation) throws InterruptedException {
		usedCarsPage.selectCarLocation(carLocation);
		Thread.sleep(1000);	

	}

	@And("select car price as {string} from price dropdown Used Search Car Page")
	public void select_car_price_as_from_price_dropdown_Used_Search_Car_Page(String carPrice) throws InterruptedException {
		usedCarsPage.selectCarPrice(carPrice);
		Thread.sleep(1000);	

	}

	@And("Click on Find_My_NextCar button Used Search Car Page")
	public void click_on_Find_My_NextCar_button_Used_Search_Car_Page() throws InterruptedException {
	   usedCarsPage.FindMyNextCar();
		Thread.sleep(1000);	

	}

	@Then("I see list of searched cars on Used Search Car Page")
	public void i_see_list_of_searched_cars_on_Used_Search_Car_Page() throws InterruptedException {
		Thread.sleep(1000);	

	}

	
	
}
