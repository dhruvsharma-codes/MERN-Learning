// HELLO WORLD
// # include <iostream>
// using namespace std;

// int main() {
//     cout << "Hello world";
//     return 0;
// }

// SUM OF TWO NUMBERS
// # include <iostream>
// using namespace std;

// int main() {
//     int a;
//     int b;
//     cout << "Enter two numbers: ";
//     cin >> a >> b;

//     cout << "Sum is : " << a + b;
//     return 0;
// }

// CHECK EVEN ODD
// #include <iostream>
// using namespace std;

// int main() {
//     int n;
//     cout << "Enter a number:";
//     cin >> n;

//     if(n % 2 == 0){
//         cout << "Even Number";
//     }
//     else {
//         cout << "Odd Number";
//     }
//     return 0;
// }

// CHECK POSITIVE, NEGATIVE, ZERO
// #include <iostream>
// using namespace std;

// int main() {
//     int n;
//     cout << "Enter number: ";
//     cin >> n;

//     if(n > 0){
//         cout << "Positive";
//     }
//     else if(n < 0) {
//         cout << "Negative";
//     }
//     else {
//          cout << "Zero";
//     }
//     return 0;
// }

// LARGEST OF TWO NUMBERS
// #include <iostream>
// using namespace std;

// int main() {
//     int a;
//     int b;
//     cout << "Enter Numbers: ";
//     cin >> a >> b;

//     if(a > b) {
//         cout << a << " " << "is greater";
//     }
//     else {
//         cout << b << " " << "is greater";
//     }
//     return 0;
// }

// LARGEST OF THREE NUMBERS
// #include <iostream>
// using namespace std;

// int main()
// {
//     int a;
//     int b;
//     int c;
//     cout << "Enter Numbers: ";
//     cin >> a >> b >> c;

//     if (a > b && a > c)
//     {
//         cout << a << " " << "is greater";
//     }
//     else if (b > c && b >> a)
//     {
//         cout << b << " " << "is greater";
//     }
//     else
//     {
//         cout << c << " " << "is greater";
//     }
//     return 0;
// }

// SWAP TWO NUMBERS USING THIRD VARIABLE
// #include <iostream>
// using namespace std;

// int main() {
//     int a = 12;
//     int b = 22;
//     int temp;
//     temp = a;
//     a = b;
//     b = temp;
//     cout << "a" << a << endl << "b" << b << endl;
//     return 0;
// }

// SWAP TWO NUMBERS WITHOUD USING THIRED VARIABLE
// #include <iostream>
// using namespace std;

// int main()
// {
//     int a = 10;
//     int b = 5;

//     a = a - b;
//     b = a + b;

//     cout << "a" << a << endl;
//     cout << "b" << b << endl;

//     return 0;
// }

// FIND FACTORIAL
// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

//     long long factorial = 1;

//     for (int i = 1; i <= n; i++)
//     {
//         factorial *= i;
//     }
//     cout << "Factorial=" << factorial << endl;
//     return 0;
// }

// PRINT TABLE
// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

//     for (int i = 1; i <= 10; i++)
//     {
//         cout << n << "*" << i << "=" << n * i << endl;
//     }
//     return 0;
// }

// PRINT SUM OF DIGITS
// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

//     int sum = 0;
//     while (n > 0)
//     {
//         int digit = n % 10;
//         sum += digit;
//         n /= 10;
//     }
//     cout << "Sum = " << sum;

//     return 0;
// }

// COUNT NUMBER OF DIGITS
// #include <iostream>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;

//     int count = 0;
//     while (n != 0)
//     {
//         n /= 10;
//         count++;
//     }
//     cout << "Digits = " << count;
//     return 0;
// }

// REVERSE A NUMBER
// #include <iostream>
// using namespace std;

// int main() {
//     int n;
//     cin >> n;

//     int reverse = 0;

//     while(n != 0) {
//         int digit = n % 10;
//         reverse = reverse * 10 + digit;
//         n /= 10;
//     }
//     cout << "Reverse" << reverse;
//     return 0;
// }