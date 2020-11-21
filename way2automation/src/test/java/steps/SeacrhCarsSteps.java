package steps;

import java.util.List;

import org.junit.Assert;
import org.testng.asserts.SoftAssert;

import io.cucumber.java.en.*;

import pages.actions.CarsGuideHomePageActions;
import pages.actions.CarsSearchPageActions;
import utils.SeleniumDriver;

public class SeacrhCarsSteps {
	
	CarsGuideHomePageActions homePAGE = new CarsGuideHomePageActions();
	CarsSearchPageActions carSearchPage = new CarsSearchPageActions();
	
	
	@Given("I am on the Home Page {string} of Carguide Website")
	public void i_am_on_the_Home_Page_of_Carguide_Website(String url) {
	   SeleniumDriver.openPage(url);
	}

	@When("I move to  menu")
	public void i_move_to_menu(List<String> list) {
		
		String menu = list.get(1);
		System.out.println("Menu is selected"+ menu);
		homePAGE.moveToBuyandSellMenu();
	
	}

	@And("click on {string} link")
	public void click_on_link(String searchCars) {
		homePAGE.clickOnSearchCarsMenu();
	}

	@And("select car brand as {string} from AnyMake dropdown")
	public void select_car_brand_as_from_AnyMake_dropdown(String carMake) {
		carSearchPage.selectCarMake(carMake);
	}

	@And("select car model as {string} fromSelectModel dropdown")
	public void select_car_model_as_fromSelectModel_dropdown(String carModel) {
		carSearchPage.selectCarModel(carModel);
	}

	@And("select car location as {string} fromSelectLocation dropdown")
	public void select_car_location_as_fromSelectLocation_dropdown(String carLocation) {
		carSearchPage.selectCarLocation(carLocation);
	}

	@And("select car price as {string} from price dropdown")
	public void select_car_price_as_from_price_dropdown(String carPrice) {
		carSearchPage.selectCarPrice(carPrice);
	}

	@And("Click on Find_My_NextCar button")
	public void click_on_Find_My_NextCar_button() {
		carSearchPage.FindMyNextCar();
	}

	@Then("I see list of searched cars")
	public void i_see_list_of_searched_cars() {
		
		System.out.println("Car list foubd");
	
	}

	@And("the page title should be {string}")
	public void the_page_title_should_be(String expected) {
		
		String actualTitle=SeleniumDriver.getDriver().getTitle();
		Assert.assertEquals(expected, actualTitle);
		
		SoftAssert softAssertion= new SoftAssert();
		
		softAssertion.assertEquals(actualTitle, expected);
		
		System.out.println("Actual Page Title is { "+actualTitle+" }" );
		System.out.println("Expected  Page Title is { "+actualTitle+" }" );
		
	    
	}

}
