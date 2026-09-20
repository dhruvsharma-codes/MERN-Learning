/*
Object is an instance of a class.

eg: Car Specifications
*/

#include <iostream>
using namespace std;

class Car
{
public:
    string name;
    string color;
    int model;

    void specifications()
    {
        cout << "Car: " << name << endl;
        cout << "Color: " << color << endl;
        cout << "Model: " << model << endl;
    }
};

int main()
{
    Car c1;
    Car c2;
    Car c3;

    c1.name = "Swift";
    c1.color = "Black";
    c1.model = 2018;

    c2.name = "Audi";
    c2.color = "White";
    c2.model = 2021;

    c3.name = "Baleno";
    c3.color = "Red";
    c3.model = 2020;

    c1.specifications();
    c2.specifications();
    c3.specifications();
    return 0;
}