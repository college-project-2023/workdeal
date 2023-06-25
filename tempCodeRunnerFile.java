// Java Program to Illustrate Arithmetic Operators

import java.util.*;

// Class 1
class A {

	// Main driver method
	public static void main(String args[])
	{

		int a = 10, b = 4, res;

		// printing a and b
		System.out.println("a is " + a + " and b is " + b);

		res = a + b; // addition
		System.out.println("a+b is " + res);

		res = a - b; // subtraction
		System.out.println("a-b is " + res);

		res = a * b; // multiplication
		System.out.println("a*b is " + res);

		res = a / b; // division
		System.out.println("a/b is " + res);

		res = a % b; // modulus
		System.out.println("a%b is " + res);
	}
}
