Feature: Application Login

@Primero
Scenario Outline: succesful login
Given User is on Login Page
When User login into application with username <username> and password <password>
Then Home page is displayed showing the username <username>
Examples:
|	username							| password |
|	1											| 123		 	 |

@Segundo
Scenario Outline: incorrect Login
Given User is on Login Page
When User login into application with username <username> and password <password>
Then Error Login Message is displayed
Examples:
|	username	| password 				 |
|	00000000	| errorPassword		 |

@Tercero
Scenario: login empty fields
Given User is on Login Page
When User login into application with emtpy username and emtpy password
Then Error Login Message is displayed

