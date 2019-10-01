# Financial Transactions Analyser

## About
'Financial Transactions Analyser' is an interface that analyses transaction records and computes the relative account balance for a given account id within a time frame, based on user input. <br>

The UI has three input fields - Account ID, From Date and To Date respectively. The system is initialised with an input file in CSV format containing a list of transaction records. Based on the user input, the application will search for all the transaction records available, and compute the relative balance, excluding REVERSAL transactions if any. <br>

### Relative Balance Calculation Logic
##### Assumptions made :
- Only transactions with transaction type as 'PAYMENT' are considered for the balance calculation. <br>
- If a transaction has a reversing transaction, this transaction will be omitted from the calculation, even if the reversing transaction is outside the given time frame. <br>
##### Logic :
* Step 1 : User enters an Account ID, From Date and To Date <br>
* Step 2 : All the transaction records that matches the following criteria are fetched. <br>
  - Created between From date and To Date. <br>
  - fromAccountId or toAccountId of the transaction is same as the Account ID. <br>
  - Transaction type is PAYMENT. <br>
* Step 3 : From the transactions subset obtained in Step 2, remove those transactions that has a corresponding REVERSAL transaction.<br>
* Step 4 : With the final transactions list, compute the relative balance using the formula: <br>
  - If the Account ID is logged as a fromAccountId, it denotes a cash outflow (debit). Hence subtract the transaction amount from the relative balance amount.<br>
  - If the Account ID is logged as a toAccountId, it denotes a cash inflow (credit). Hence add the transaction amount to the relative balance amount. <br>

### Validations in UI
- Calculate button will not be enabled until user enters values in all the three input fields. <br>
- Date fields have additional validation for date format. Valid date formats are: <br>
  - "DD/MM/YYYY HH:mm:ss"
  - "DD-MM-YYYY HH:mm:ss"
  - "DD/MM/YYYY"
  - "DD-MM-YYYY"
- From date cannot be greater than To date. This validation will be done after the user clicks on Calculate.

### Test coverage:
Unit tests are provided for each component. Integration tests to mock the entire system behaviour end-to-end is not implemented yet.

## Steps to run the application

- Install Git (https://git-scm.com) (if you want to clone, or you may choose to download the repository directly)<br>
- Install Node.js (https://nodejs.org/en/)<br>
- Download this repository - `git clone https://github.com/mithunprem/transactionanalyser.git`

## Install dependencies

In the project directory, you can run:

### `npm install`

## To start the application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
The app is ready to be deployed!
