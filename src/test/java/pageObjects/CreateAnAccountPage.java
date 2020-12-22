package pageObjects;

import helpers.Utils;
import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import javax.rmi.CORBA.Util;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class CreateAnAccountPage extends Utils {
    public CreateAnAccountPage() throws IOException {
    }

    @FindBy(how = How.CSS, using = "a.login")
    public static WebElement signInButton;

    @FindBy(how = How.ID, using = "email_create")
    public static WebElement emailAddress;

    @FindBy(how = How.ID, using = "SubmitCreate")
    public static WebElement createAccountButton;

    @FindBy(how = How.ID, using = "id_gender1")
    public static WebElement mrTitle;

    @FindBy(how = How.ID, using = "uniform-id_gender2")
    public static WebElement mrsTitle;

    @FindBy(how = How.CSS, using = "h1.page-heading")
    public static WebElement createAnAccountPageHeader;

    @FindBy(how = How.ID, using = "customer_firstname")
    public static WebElement firstname;

    @FindBy(how = How.ID, using = "customer_lastname")
    public static WebElement lastname;

    @FindBy(how = How.ID, using = "passwd")
    public static WebElement password;

    @FindBy(how = How.ID, using = "days")
    public static WebElement dayOfBirth;

    @FindBy(how = How.ID, using = "months")
    public static WebElement monthOfBirth;

    @FindBy(how = How.ID, using = "years")
    public static WebElement yearOfBirth;

    @FindBy(how = How.ID, using = "newsletter")
    public static WebElement newsletter;

    @FindBy(how = How.ID, using = "optin")
    public static WebElement specialOffers;

    @FindBy(how = How.ID, using = "address1")
    public static WebElement address;

    @FindBy(how = How.ID, using = "city")
    public static WebElement city;

    @FindBy(how = How.ID, using = "id_state")
    public static WebElement state;

    @FindBy(how = How.ID, using = "postcode")
    public static WebElement postalCode;

    @FindBy(how = How.ID, using = "id_country")
    public static WebElement country;

    @FindBy(how = How.ID, using = "phone_mobile")
    public static WebElement mobilePhoneNumber;

    @FindBy(how = How.ID, using = "submitAccount")
    public static WebElement registerButton;

    @FindBy(how = How.CSS, using = "a[title='Orders']")
    public static WebElement orderLink;

    @FindBy(how = How.CSS, using = "#center_column div.alert ol > li")
    public static List<WebElement> errorMessage;

    @FindBy(how = How.CSS, using = "a[title='View my customer account']")
    public static WebElement accountName;


    public void clickSignIn() {
        waitForElement(signInButton, 2);
        signInButton.click();
    }

    public void enterEmailAddress(String email) {
        waitForElement(emailAddress, 2);
        emailAddress.sendKeys(email);
    }

    public void clickCreateAccount() {
        waitForElement(createAccountButton, 2);
        createAccountButton.click();
    }

    public void gotoCreateAccountPage() {
        clickSignIn();
        enterEmailAddress(RandomStringUtils.randomAlphanumeric(10) + "@abc.com");
        clickCreateAccount();
        waitForElement(mrTitle , 20);
    }

    public String getPageHeader() {
        waitForElement(createAnAccountPageHeader, 4);
        return createAnAccountPageHeader.getText();
    }

    public void selectTitle(String title) {
        if (title.equalsIgnoreCase("Mr"))
            mrTitle.click();
        else if (title.equalsIgnoreCase("Mrs"))
            mrsTitle.click();
    }

    public void enterFirstName(String name) {
        waitForElement(firstname, 2);
        firstname.sendKeys(name);
    }

    public void enterLastName(String name) {
        waitForElement(lastname, 2);
        lastname.sendKeys(name);
    }

    public void enterPassword(String pass) {
        waitForElement(password, 2);
        password.sendKeys(pass);
    }

    public void enterDOB(String date) {
        String[] dob = date.split("-");
        dayOfBirth.sendKeys(dob[0]);
        monthOfBirth.sendKeys(dob[1]);
        yearOfBirth.sendKeys(dob[2]);
    }

    public void optInNewsLetters(String news) {
        if(news.equalsIgnoreCase("true"))
        newsletter.click();
    }

    public void optInSpecialOffers(String offers) {
        if(offers.equalsIgnoreCase("true"))
        specialOffers.click();
    }

    public void enterAddress(String add) {
        address.sendKeys(add);
    }

    public void enterCity(String place) {
        city.sendKeys(place);
    }

    public void enterState(String county) {
        state.sendKeys(county);
    }

    public void enterCountry(String coun) {
        country.sendKeys(coun);
    }

    public void enterPCode(String postcode) {
        postalCode.sendKeys(postcode);
    }

    public void enterMobileNumber(String number) {
        mobilePhoneNumber.sendKeys(number);
    }

    public void submitAccount() {
        registerButton.click();
    }

    public List<String> getErrors() {
        List<String> errorStrings = new ArrayList<>();
        errorMessage.forEach(e -> {
            errorStrings.add(e.getText());
        });
        return errorStrings;
    }

    public void waitForMyAccountsPage(){
        waitForElement(orderLink , 30);
    }

    public String getAccountName() {
        waitForElement(accountName, 2);
        return accountName.getText();
    }


}
