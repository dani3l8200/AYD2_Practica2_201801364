Feature: Application Transaction

Background:
Given User is on Login Page
When User login into application with username 1 and password 123

@Decimo
Scenario Outline: succesful transaction
When userFill the transfer with <destination> destination account and amount <amount>
Then Display Message Ok transfer
Examples:
|	destination	 | amount | 
|	2		  			 | 1    	| 


@Undecimo
Scenario: transaction fail
When user dont Fill the transfer and amount
Then Error Message Register is displayed