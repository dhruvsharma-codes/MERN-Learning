/*
Polymorphism means many form. polymorphism means one interface can have many forms and behavior.
*/

// Funaction Overloading
// #include <iostream>
// using namespace std;

// class Calculator
// {
// public:
//     int add(int a, int b)
//     {
//         return a + b;
//     }

//     int add(int a, int b, int c)
//     {
//         return a + b + c;
//     }
// };

// int main()
// {
//     Calculator c;
//     cout << c.add(10, 20) << endl;
//     cout << c.add(10, 20, 30) << endl;
//     return 0;
// }


// function overriding
#include <iostream>
using namespace std;

class Animal
{
public:
    virtual void sound()
    {
        cout << "Animal Sound" << endl;
    }
};

class Dog : public Animal
{
public:
    void sound() override
    {
        cout << "Dog barks" << endl;
    }
};

int main()
{
    Animal *animal;
    Dog dog;
    animal = &dog;
    animal->sound();
    return 0;
}