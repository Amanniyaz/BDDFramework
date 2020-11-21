package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.SearchCarsPageLocators;
import utils.SeleniumDriver;

public class CarsSearchPageActions {
	
	SearchCarsPageLocators searchCarsPageLocators=null;
	
	public CarsSearchPageActions() {
		this.searchCarsPageLocators = new SearchCarsPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(),searchCarsPageLocators);
	}
	
	public void selectCarMake(String carBrand) {
		Select selectCarMaker = new Select(searchCarsPageLocators.searchMakes);
		selectCarMaker.selectByVisibleText(carBrand);
	}
	public void selectCarModel(String carModel) {
		Select selectCarMaker = new Select(searchCarsPageLocators.searchModels);
		selectCarMaker.selectByVisibleText(carModel);
	}
	public void selectCarLocation(String carLocation) {
		Select selectCarMaker = new Select(searchCarsPageLocators.searchlocations);
		selectCarMaker.selectByVisibleText(carLocation);
	}
	public void selectCarPrice(String carPrice) {
		Select selectCarMaker = new Select(searchCarsPageLocators.searchPrice);
		selectCarMaker.selectByVisibleText(carPrice);
	}
	public void FindMyNextCar() {
		searchCarsPageLocators.FindMyNextCarBtn.click();
	}
}
