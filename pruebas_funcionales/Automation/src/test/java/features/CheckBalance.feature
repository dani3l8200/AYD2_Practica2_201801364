Feature: Application Balance


Background:
Given User is on Login Page
When User login into application with username 1 and password 123

@Octavo
Scenario: profile show
Given User click in the button consultar saldo
Then balance change in input



@Noveno
Scenario Outline: profile not show
Given User click in the button consultar saldo
Then balance dont change in input
