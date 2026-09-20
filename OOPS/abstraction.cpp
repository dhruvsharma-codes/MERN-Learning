/*
Abstraction means hiding unnescessary implementation details and showing only essential functionality.

eg: Atm machine
*/

#include <iostream>
using namespace std;

// abstract class: class having a pure virtual function
class Payment
{

public:
    virtual void pay() = 0; // Pure virtual function: declared in base class thathas no implementation and ovveride by the derived class
};

class CreditCardPayment : public Payment
{

public:
    void pay() override
    {
        cout << "Payment using credit card" << endl;
    }
};

int main()
{
    CreditCardPayment p;
    p.pay();
    return 0;
}