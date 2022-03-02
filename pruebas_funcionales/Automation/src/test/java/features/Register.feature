Feature: Application Register

@Cuarto
Scenario Outline: succesful register
Given User is on Login Page
When User Goes Singup Page and Fill the form with nombres <nombres> apellidos <apellidos> dpi <dpi> saldo <saldo> correo <correo> password <password>
Then User Account is displayed
Examples:
|	nombres	 | apellidos | dpi 	| saldo | correo 								| password |
|	cucumber | selenium  | 1792 | 30  	| cucumber@selenium.com | cucumber |


@Quinto
Scenario: register fail
Given User is on Login Page
When User Goes Singup Page and dont Fill the form 
Then Error Message Register is displayed