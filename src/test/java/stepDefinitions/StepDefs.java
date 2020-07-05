package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pageObjects.CarTax;
import pageObjects.FreeCarCheck;

import java.io.*;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;


import static helpers.Utils.*;
import static org.junit.Assert.assertTrue;

public class StepDefs {
    String fileContent;
    //    List<String> taxCheckContent = new ArrayList<String>();
    private CarTax carTax = PageFactory.initElements(CarTax.driver, CarTax.class);
    private FreeCarCheck freeCarCheck = PageFactory.initElements(FreeCarCheck.driver, FreeCarCheck.class);
    public static Logger log = Logger.getLogger(String.valueOf(StepDefs.class));


    @Given("^I use the input file \"([^\"]*)\"$")
    public void iUseTheInputFile(String inputFileName) throws Throwable {
        String file = Paths.get("src/test/resources/Data/" + inputFileName).toAbsolutePath().toString();
//        log.info("File path name is" + file);
        fileContent = readFile(file);
        log.info("File content is " + fileContent);
    }

    @And("^we get the regex from the file$")
    public void weGetTheRegexFromTheFile() throws IOException {
        setContext("listOfNumber", matchPatterns(fileContent));
    }

    @When("^I search for the regex in \"([^\"]*)\" website$")
    public void iSearchForTheRegexInWebsite(String url) throws Throwable {
        List<String> taxCheckContentList = new ArrayList<String>();
        for (int i = 0; i < getContext("listOfNumber").size(); i++) {
            carTax.enterVRM(getContext("listOfNumber").get(i).trim());
            carTax.clickFreeCarCheckButton();
            String eachRow = freeCarCheck.getRegistrationText() + "," + freeCarCheck.getMakeText() + "," + freeCarCheck.getModelText() + "," + freeCarCheck.getColourText() + "," + freeCarCheck.getYearText();
            taxCheckContentList.add(eachRow);
            freeCarCheck.clickSearch();
        }
        setContext("taxCheckContent", taxCheckContentList);
    }

    @Then("^the result should match the details in the output file \"([^\"]*)\"$")
    public void theResultShouldMatchTheDetailsInTheOutputFile(String outputFileName) throws Throwable {
        String filePath = "src" + fs + "test" + fs + "resources" + fs + "Data" + fs + outputFileName;
        String file = Paths.get(filePath).toAbsolutePath().toString();

        List<String> copy = new ArrayList<>();
        copy.addAll(readFileInList(file));

        if (!getContext("taxCheckContent").equals(readFileInList(file))) {
            copy.removeAll(getContext("taxCheckContent"));
        }
        assertTrue("The following records doesnt match" + copy, getContext("taxCheckContent").equals(readFileInList(file)));

    }


}
