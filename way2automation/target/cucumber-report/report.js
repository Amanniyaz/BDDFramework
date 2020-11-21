$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UsedCarSearch.feature");
formatter.feature({
  "name": "",
  "description": "\tAcceptance testing to validate Used Search cars page is working properly. \n\tIn order to validate that the used search cars page is working fine \n\twe will do the accepatance testing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.scenario({
  "name": "Validate used search cars page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Used-Search-Cars"
    },
    {
      "name": "@Used-Search_Cars-Positive"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of Carguide Website",
  "keyword": "Given "
});
formatter.match({
  "location": "SeacrhCarsSteps.i_am_on_the_Home_Page_of_Carguide_Website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move to  menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ]
    },
    {
      "cells": [
        "buys and sell"
      ]
    },
    {
      "cells": [
        "reviews"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SeacrhCarsSteps.i_move_to_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Used\" link Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.click_on_link_Used_Search_Car_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select car brand as \"AUDI\" from AnyMake dropdown Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_brand_as_from_AnyMake_dropdown_Used_Search_Car_Page(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: AUDI\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Mahris-MacBook-Pro.local\u0027, ip: \u00272001:579:a154:7ce0:5b06:11bd:31be:1fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\n\tat pages.actions.UsedCarsSearchPageActions.selectCarMake(UsedCarsSearchPageActions.java:23)\n\tat steps.UsedCarsSearchSteps.select_car_brand_as_from_AnyMake_dropdown_Used_Search_Car_Page(UsedCarsSearchSteps.java:23)\n\tat ✽.select car brand as \"AUDI\" from AnyMake dropdown Used Search Car Page(file:src/test/resources/features/UsedCarSearch.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "Select car model as Used Search Car Page",
  "rows": [
    {
      "cells": [
        "Model"
      ]
    },
    {
      "cells": [
        "A4"
      ]
    },
    {
      "cells": [
        "A3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_model_as(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select car location as \"NSW - Sydney\" fromSelectLocation dropdown Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_location_as_fromSelectLocation_dropdown_Used_Search_Car_Page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select car price as \"$3,000\" from price dropdown Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_price_as_from_price_dropdown_Used_Search_Car_Page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Find_My_NextCar button Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.click_on_Find_My_NextCar_button_Used_Search_Car_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see list of searched cars on Used Search Car Page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSearchSteps.i_see_list_of_searched_cars_on_Used_Search_Car_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the page title should be \"Used Audi A4 Under 3000 for Sale Sydney NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "SeacrhCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Mahris-MacBook-Pro.local\u0027, ip: \u00272001:579:a154:7ce0:5b06:11bd:31be:1fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/n0/73ny369j07x...}, goog:chromeOptions: {debuggerAddress: localhost:53559}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 32018f79c7dca16ea358239a5180ca72\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\n\tat utils.SeleniumDriver.tearDown(SeleniumDriver.java:52)\n\tat steps.AfterActions.tearDown(AfterActions.java:10)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\n",
  "status": "failed"
});
});