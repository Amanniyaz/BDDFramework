package pages.locators;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.SeleniumDriver;

public class SearchCarsPageLocators {
	
	
		
		WebDriver driver;
		
		public SearchCarsPageLocators() {
			
			driver=SeleniumDriver.getDriver();
			PageFactory.initElements(driver, this);
		}
		
		@FindBy(xpath="//*[@id='makes']")
		public WebElement searchMakes;
		
		@FindBy(xpath="//*[@id='models']")
		public WebElement searchModels;
		
		@FindBy(xpath="//*[@id='locations']")
		public WebElement searchlocations;
		
		@FindBy(xpath="//*[@id='priceTo']")
		public WebElement searchPrice;
		
		@FindBy(xpath = "//*[@id='search-submit']")
		public WebElement FindMyNextCarBtn;
		

}
