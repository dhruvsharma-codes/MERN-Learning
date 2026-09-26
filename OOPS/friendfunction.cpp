/*
Friend function is not member of class but can access but can access private/ protected members if declared as friend.
*/

#include <iostream>
using namespace std;

class Student
{

private:
    int marks = 90;

public:
    friend void display(Student s);
};

void display(Student s)
{
    cout << s.marks;
}

int main()
{
    Student s;
    display(s);
}

// A static data member is a class variable that is shared by all objects of that class.