/*
Inheritance allows one class to acquire properties and functions of another class.

eg; Animal Class
*/

// #include <iostream>
// using namespace std;

// class Animal
// {
// public:
//     void eat()
//     {
//         cout << "Animal is eating." << endl;
//     }

//     void sleep()
//     {
//         cout << "Animal is sleeping." << endl;
//     }
// };

// class Dog : public Animal
// {
// public:
//     void bark()
//     {
//         cout << "Dog is barking." << endl;
//     }
// };

// int main()
// {
//     Dog d;
//     d.eat();
//     d.sleep();
//     d.bark();
//     return 0;
// }

// Single Inheritance
// #include <iostream>
// using namespace std;

// class Animal
// {
// public:
//     void eat()
//     {
//         cout << "Animal is eating." << endl;
//     }
// };
// class Dog : public Animal
// {
// public:
//     void bark()
//     {
//         cout << "Dog is barking." << endl;
//     }
// };

// int main()
// {
//     Dog d;
//     d.eat();
//     d.bark();
//     return 0;
// }

// Multilevel Inheritnce
// #include <iostream>
// using namespace std;

// class Animal
// {
// public:
//     void eat()
//     {
//         cout << "Animal is eating." << endl;
//     }
// };
// class Dog : public Animal
// {
// public:
//     void bark()
//     {
//         cout << "Dog is barking." << endl;
//     }
// };
// class Puppy : public Dog
// {
// public:
//     void play()
//     {
//         cout << "Puppy is playing." << endl;
//     }
// };

// int main()
// {
//     Puppy p;
//     p.eat();
//     p.bark();
//     p.play();
//     return 0;
// }

// Multiple Inheritance
#include <iostream>
using namespace std;

class Father
{
public:
    void fatherProprty()
    {
        cout << "Father Property" << endl;
    }
};
class Mother
{
public:
    void motherProprty()
    {
        cout << "Mother Property" << endl;
    }
};

class Child : public Father, public Mother
{
public:
    void childProperty()
    {
        cout << "Child Property" << endl;
    }
};

int main()
{
    Child c;
    c.fatherProprty();
    c.motherProprty();
    c.childProperty();
    return 0;
}