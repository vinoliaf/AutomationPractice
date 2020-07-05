package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import stepDefinitions.Hooks;


import java.io.IOException;

public class FreeCarCheck extends Hooks {

    public FreeCarCheck() throws IOException {
    }

    @FindBy(how = How.CSS, using = "#__next #m > div >div:nth-of-type(3) > div > div > span > div:nth-of-type(2) > dl:nth-of-type(1) > dd")
    public static WebElement registrationLabel;

    @FindBy(how = How.CSS, using = "#__next #m > div >div:nth-of-type(3) > div > div > span > div:nth-of-type(2) > dl:nth-of-type(2) > dd")
    public static WebElement makeLabel;

    @FindBy(how = How.CSS, using = "#__next #m > div >div:nth-of-type(3) > div > div > span > div:nth-of-type(2) > dl:nth-of-type(3) > dd")
    public static WebElement modelLabel;

    @FindBy(how = How.CSS, using = "#__next #m > div >div:nth-of-type(3) > div > div > span > div:nth-of-type(2) > dl:nth-of-type(4) > dd")
    public static WebElement colourLabel;

    @FindBy(how = How.CSS, using = "#__next #m > div >div:nth-of-type(3) > div > div > span > div:nth-of-type(2) > dl:nth-of-type(5) > dd")
    public static WebElement yearLabel;

    @FindBy(how = How.CSS, using = "a[aria-label='new search']")
    public static WebElement search;

    public String getRegistrationText() throws InterruptedException {
        Thread.sleep(2000);
        return registrationLabel.getText();
    }

    public String getMakeText() {
        return makeLabel.getText();
    }

    public String getModelText() {
        return modelLabel.getText();
    }

    public String getColourText() {
        return colourLabel.getText();
    }

    public String getYearText() {
        return yearLabel.getText();
    }

    public void clickSearch() {
        search.click();
    }

}
