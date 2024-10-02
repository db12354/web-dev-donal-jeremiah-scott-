#include <stdio.h>
 

int main(){
    int num1 = 15;
    int num2 = 10;
    int num3 = 3;
    
    int sum1 = num1 + num2;
    printf("15 + 10 is equal to %d\n", sum1);

    int sum2 = num1 - num2;
    printf("15 - 10 is equal to %d\n", sum2)

    int sum3 = num1 * num2;
    printf("15 * 10 is equal to %d\n", sum3)

    float sum4 = num1 /num2;
    printf("15 / 10 us equal to %f\n", sum4 )

    float sum5 = num1 % num3;
    printf("15 %% 3 us equal to %f\n", sum5)
    return 0;
}