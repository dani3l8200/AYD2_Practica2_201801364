Feature: Application Report

Background:
Given User is on Login Page
When User login into application with username 1 and password 123


@Duodecimo
Scenario: report ok
When clicks on generar report
Then Download message display