/*
A Constructor is a special member function that is automatically called when an object is created.
*/

// Default Constructor
// #include <iostream>
// using namespace std;

// class Student {

//     public:
//     Student() {
//         cout << "Constructor called";
//     }

// };

// int main() {
//     Student s;
// }

// Paramterized constructor
#include <iostream>
using namespace std;

class Student
{

public:
    string name;
    int age;

    Student(string n, int a)
    {
        name = n;
        age = a;
    }
};

int main()
{
    Student s("dhruv", 21);
    cout << s.name << s.age;
}


// A shallow copy copies the pointer address.
// A deep copy creates separate memory:
