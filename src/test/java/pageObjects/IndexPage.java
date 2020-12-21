package pageObjects;

import helpers.Utils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import stepDefinitions.Hooks;

import java.io.IOException;

public class IndexPage extends Utils {

    public IndexPage() throws IOException {
    }

    Actions actions = new Actions(driver);

    @FindBy(how = How.CSS, using = "ul#homefeatured  div.product-image-container")
    public static WebElement anyDress;

    @FindBy(how = How.CSS, using = "#add_to_cart button")
    public static WebElement addToCartButton;

    @FindBy(how = How.CSS, using = "[id ^= 'fancybox-frame']")
    public static WebElement addToCartFrame;

    @FindBy(how = How.CSS, using = "a[title='Proceed to checkout']")
    public static WebElement proceedToCheckoutLink;

    @FindBy(how = How.CSS, using = "#cart_summary a[title='Delete']")
    public static WebElement shoppingCartDeleteLink;

    @FindBy(how = How.CSS, using = "#cart_summary")
    public static WebElement cart_summary;

    @FindBy(how = How.CSS, using = "p.alert")
    public static WebElement shoppingCartAlert;

//User Story 2

    @FindBy(how = How.CSS, using = "#block_top_menu ul li")
    public static WebElement womenMenu;

    @FindBy(how = How.CSS, using = "a[title='Summer Dresses']")
    public static WebElement summerDressesMenu;

    @FindBy(how = How.CSS, using = "h1.page-heading > span.cat-name")
    public static WebElement summerDressesPageHeading;


    public void selectAnyDress() throws InterruptedException {
        actions.moveToElement(anyDress).click().perform();
    }

    public void clickAddToCart() throws InterruptedException {
        waitForFrame(addToCartFrame);
        addToCartButton.click();
    }


    public void proceedToCheckout() throws InterruptedException {
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", proceedToCheckoutLink);
    }

    public boolean isShoppingCartDeletePresent() throws InterruptedException {
        waitForElement(shoppingCartDeleteLink, 20);
        return shoppingCartDeleteLink.isDisplayed();
    }

    public void deleteAnItem() {
        shoppingCartDeleteLink.click();
    }

    public boolean isCartSummaryPresent() throws InterruptedException {
        waitForElement(shoppingCartAlert,2);
        return shoppingCartAlert.isDisplayed();
    }

    public String cartAlertText() throws InterruptedException {
        waitForElement(shoppingCartAlert,2);
        return shoppingCartAlert.getText();
    }

    public void navigateToSummerDresses() throws InterruptedException {
        actions.moveToElement(womenMenu).perform();
        actions.moveToElement(summerDressesMenu).click().perform();
    }

    public String summerDressesPageHeadingText() throws InterruptedException {
        waitForElement(summerDressesPageHeading,2);
        return summerDressesPageHeading.getText();
    }

}
