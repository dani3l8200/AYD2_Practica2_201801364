Feature: Application Profile


Background:
Given User is on Login Page
When User login into application with username 1 and password 123

@Sexto
Scenario Outline: profile show
Given User Card show
Then Account Number <accountNo> display
Examples:
|	accountNo	| 
|	1					|


@Septimo
Scenario Outline: profile show
Given User Card show
Then Account Number <accountNo> not show
Examples:
|	accountNo	| 
|	01010			|

