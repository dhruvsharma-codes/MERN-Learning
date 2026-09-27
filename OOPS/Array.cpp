// PRINT ALL ELEMENTS IN ARRAY
// #include <iostream>
// using namespace std;

// int main()
// {
//     int arr[] = {10, 20, 30, 40, 50};
//     int n = 5;

//     for (int i = 0; i < n; i++)
//     {
//         cout << arr[i] << " ";
//     }
//     return 0;
// }

// SUM OF ARRAY
// #include <iostream>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     int arr[n];
//     int sum = 0;

//     for (int i = 1; i < n; i++)
//     {
//         cin >> arr[i];
//         sum += arr[i];
//     }
//     cout << "Sum:" << sum;
//     return 0;
// }

// ARRAY INPUT
// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

//     int arr[n];
//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i];
//     }
//     for (int i = 0; i < n; i++)
//     {
//         cout << arr[i];
//     }
// }

// LARGEST IN ARRAY
// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

//     int arr[n];
//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i];
//     }

//     int largest = arr[0];
//     for (int i = 0; i < n; i++)
//     {
//         if (arr[i] > largest)
//         {
//             largest = arr[i];
//         }
//     }
//     cout << "Largest:" << " " << largest;
//     return 0;
// }

// SMALLEST IN ARRAY
#include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

//     int arr[n];
//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i];
//     }

//     int smallest = arr[0];
//     for (int i = 0; i < n; i++)
//     {
//         if (arr[i] < smallest)
//         {
//             smallest = arr[i];
//         }
//     }
//     cout << "smallest:" << " " << smallest;
//     return 0;
// }

// COUNT EVEN ODD
// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     int arr[n];
//     int even = 0;
//     int odd = 0;

//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i];
//         if (arr[i] % 2 == 0)
//         {
//             even++;
//         }
//         else
//         {
//             odd++;
//         }
//     }
//     cout << "Even = " << even << endl;
//     cout << "Odd = " << odd;
//     return 0;
// }

// REVERSE NUMBER
// #include <iostream>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     int arr[n];

//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i];
//     }
//     for (int i = n - 1; i >= 0; i--)
//     {
//         cout << arr[i] << " ";
//     }
//     return 0;
// }