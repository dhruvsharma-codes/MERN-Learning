/*
Inheritance allows one class to acquire properties and functions of another class.

eg; Animal Class
*/

#include <iostream>
using namespace std;

class Animal
{
public:
    void eat()
    {
        cout << "Animal is eating." << endl;
    }

    void sleep()
    {
        cout << "Animal is sleeping." << endl;
    }
};

class Dog : public Animal
{
public:
    void bark()
    {
        cout << "Dog is barking." << endl;
    }
};

int main()
{
    Dog d;
    d.eat();
    d.sleep();
    d.bark();
    return 0;
}