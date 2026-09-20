/*
Encapsulation means wrapping data and functions together inside a class and controlling access to that data.

eg: bank account
*/

#include <iostream>
using namespace std;

class BankAccount
{
private:
    double balance;

public:
    void setBalance(double amount)
    {
        if (amount >= 0)
        {
            balance = amount;
        }
    }
    double getBalance()
    {
        return balance;
    }
};

int main()
{
    BankAccount acc;
    acc.setBalance(50000);
    cout << acc.getBalance();
    return 0;
}