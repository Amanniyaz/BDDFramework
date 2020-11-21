package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
			features="./src/test/resources/features",
			glue= {"steps"},
			dryRun=false,
			tags= {"@Used-Search-Cars"},
			plugin= {"pretty", "html:target/cucumber-report"},
			monochrome = true
			
)


public class TestRunner {
	
	

}
