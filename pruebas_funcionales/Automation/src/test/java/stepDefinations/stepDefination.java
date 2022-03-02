package stepDefinations;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
public class stepDefination {
	
	public WebDriver driver;
	
	// ----------------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------------- LOGIN
    @Given("^User is on Login Page$")
    public void user_is_on_login_page() throws Throwable {
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\chromedriver.exe"); 
    	driver = new ChromeDriver();
    	driver.get("http://localhost:3000/login");
    }

    @When("^User login into application with username (.+) and password (.+)$")
    public void user_login_into_application_with_username_and_password(String username, String password) throws Throwable {
    	driver.findElement(By.xpath("//input[@id='noAccount']")).sendKeys(username);
    	driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
    	driver.findElement(By.xpath("//button[@id='buttomLogin']")).click();
    }

    @Then("^Home page is displayed showing the username (.+)$")
    public void home_page_is_displayed_showing_the_username(String username) throws Throwable {
    	Thread.sleep(5000);
    	String content = driver.findElement(By.xpath("//input[@id='noAccount']")).getAttribute("value");
    	boolean flag = content.contains(username);
    	Assert.assertTrue(flag);  
    } 
    
    
    @Then("^Error Login Message is displayed$")
    public void error_login_message_is_displayed() throws Throwable {
    	Thread.sleep(3000);
    	String cuerpoAlerta = driver.findElement(By.cssSelector("#swal2-title")).getText();
    	boolean flag = false;
    	if (cuerpoAlerta.contains("user not found in the system") || cuerpoAlerta.contains("Campos incompletos")) {
    		flag = true;
		}
    	
    	Assert.assertTrue(flag);  
    }
    
    
    @When("^User login into application with emtpy username and emtpy password$")
    public void user_login_into_application_with_emtpy_username_and_emtpy_password() throws Throwable {
    	System.out.println("está entrando acá");
    	driver.findElement(By.xpath("//input[@id='noAccount']")).sendKeys("");
    	driver.findElement(By.xpath("//input[@id='password']")).sendKeys("");
    	driver.findElement(By.xpath("//button[@id='buttomLogin']")).click();
    }
    
    
    // ----------------------------------------------------------------------------------------------
 	// ---------------------------------------------------------------------------------------------- REGISTER
    @When("^User Goes Singup Page and Fill the form with nombres (.+) apellidos (.+) dpi (.+) saldo (.+) correo (.+) password (.+)$")
    public void user_goes_singup_page_and_fill_the_form_with_nombres_apellidos_dpi_saldo_correo_password(String nombres, String apellidos, String dpi, String saldo, String correo, String password) throws Throwable {
    	driver.findElement(By.xpath("//body/div[@id='root']/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/a[1]/button[1]")).click();
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//input[@id='nameUser']")).sendKeys(nombres);
    	driver.findElement(By.xpath("//input[@id='lastNameUser']")).sendKeys(apellidos);
    	driver.findElement(By.xpath("//input[@id='dpiUser']")).sendKeys(dpi);
    	driver.findElement(By.xpath("//input[@id='initialAmount']")).sendKeys(saldo);
    	driver.findElement(By.xpath("//input[@id='email']")).sendKeys(correo);
    	driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
    	driver.findElement(By.xpath("//button[@id='buttomregister']")).click();
    }
    
    @Then("^User Account is displayed$")
    public void user_account_is_displayed() throws Throwable {
    	Thread.sleep(3000);
    	String cuerpoAlerta = driver.findElement(By.cssSelector("#swal2-title")).getText();
    	boolean flag = cuerpoAlerta.contains("No. Cuenta");    	
    	Assert.assertTrue(flag);  
    }
    
    
    @When("^User Goes Singup Page and dont Fill the form$")
    public void user_goes_singup_page_and_dont_fill_the_form() throws Throwable {
    	driver.findElement(By.xpath("//body/div[@id='root']/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/a[1]/button[1]")).click();
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//button[@id='buttomregister']")).click();
    }
     
    @Then("^Error Message Register is displayed$")
    public void error_message_register_is_displayed() throws Throwable {
    	Thread.sleep(3000);
    	String cuerpoAlerta = driver.findElement(By.cssSelector("#swal2-title")).getText();
    	boolean flag = cuerpoAlerta.contains("Campos incompletos");    	
    	Assert.assertTrue(flag); 
    }
    
    
    // ----------------------------------------------------------------------------------------------
  	// ---------------------------------------------------------------------------------------------- PROFILE
    @Given("^User Card show$")
    public void user_card_show() throws Throwable {
    	Thread.sleep(5000);
    	driver.findElement(By.xpath("//body/div[@id='root']/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]"));	
    }

    @Then("^Account Number (.+) display$")
    public void account_number_display(String accountno) throws Throwable {
    	String content = driver.findElement(By.xpath("//input[@id='noAccount']")).getAttribute("value");
    	boolean flag = false;
    	if(content.equalsIgnoreCase(accountno)) {
    		flag = true;
    	}
    	Assert.assertTrue(flag);  
    }
    
    @Then("^Account Number (.+) not show$")
    public void account_number_not_show(String accountno) throws Throwable {
    	String content = driver.findElement(By.xpath("//input[@id='noAccount']")).getAttribute("value");
    	boolean flag = false;
    	if(!content.equalsIgnoreCase(accountno)) {
    		flag = true;
    	}
    	Assert.assertTrue(flag);  
    }
    
    
    // ----------------------------------------------------------------------------------------------
  	// ---------------------------------------------------------------------------------------------- CHECK BALANCE
    @Given("^User click in the button consultar saldo$")
    public void user_click_in_the_button_consultar_saldo() throws Throwable {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//button[@id='consultasaldo']")).click();
    	Thread.sleep(5000);
    }

    @Then("^balance change in input$")
    public void balance_change_in_input() throws Throwable {
    	String content = driver.findElement(By.xpath("//body/div[@id='root']/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")).getAttribute("value");
    	boolean flag = false;
    	if(!content.equalsIgnoreCase("0")) {
    		flag = true;
    	}
    	Assert.assertTrue(flag); 
    }
    
    @Then("^balance dont change in input$")
    public void balance_dont_change_in_input() throws Throwable {
    	String content = driver.findElement(By.xpath("//body/div[@id='root']/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")).getAttribute("value");
    	boolean flag = false;
    	if(!content.equalsIgnoreCase("0")) {
    		flag = true;
    	}
    	Assert.assertTrue(flag); 
    }
    
    
    // ----------------------------------------------------------------------------------------------
  	// ---------------------------------------------------------------------------------------------- TRANSACTION   
    @When("^userFill the transfer with (.+) destination account and amount (.+)$")
    public void userfill_the_transfer_with_destination_account_and_amount(String destination, String amount) throws Throwable {
    	Thread.sleep(5000);
    	driver.findElement(By.xpath("//input[@id='noCuentaDestino']")).sendKeys(destination);
    	driver.findElement(By.xpath("//body/div[@id='root']/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]")).sendKeys(amount);
    	driver.findElement(By.xpath("//button[@id='buttomsendmoney']")).click();
    }

    @Then("^Display Message Ok transfer$")
    public void display_message_ok_transfer() throws Throwable {
    	Thread.sleep(3000);
    	String cuerpoAlerta = driver.findElement(By.cssSelector("#swal2-title")).getText();
    	boolean flag = cuerpoAlerta.contains("transfer ok");
    	Assert.assertTrue(flag); 
    }
    
    @When("^user dont Fill the transfer and amount$")
    public void user_dont_fill_the_transfer_and_amount() throws Throwable {
    	Thread.sleep(5000);
    	driver.findElement(By.xpath("//input[@id='noCuentaDestino']")).sendKeys("");
    	driver.findElement(By.xpath("//body/div[@id='root']/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]")).sendKeys("");
    	driver.findElement(By.xpath("//button[@id='buttomsendmoney']")).click();
    }
    
    
	// ----------------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------------- REPORT
    @When("^clicks on generar report$")
    public void clicks_on_generar_report() throws Throwable {
    	Thread.sleep(5000);
    	driver.findElement(By.xpath("//button[@id='buttondownload']")).click();
    }

    @Then("^Download message display$")
    public void download_message_display() throws Throwable {
    	Thread.sleep(3000);
    	String cuerpoAlerta = driver.findElement(By.cssSelector("#swal2-title")).getText();
    	boolean flag = cuerpoAlerta.contains("reporte ha sido generado");    	
    	Assert.assertTrue(flag); 
    }

    
}
