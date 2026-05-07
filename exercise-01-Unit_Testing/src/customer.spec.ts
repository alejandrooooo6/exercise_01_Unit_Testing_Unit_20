/**
 *  Unit test for class Customer
 */

import { Customer } from "./customer.js";

describe('Test of class Customer', () => {

    describe('constructor', () => {
        test('it instantiates the customer successfully', () => {
            // Act
            const result = new Customer('Alice', 'regular');
            // Assert
            expect(result).toBeInstanceOf(Customer);
        });
    });

    describe('method getDiscountRate', () => {
        test('it returns 0.15 for regular customer', () => {
            // Arrange
            const customer = new Customer('Alice', 'regular');

            // Act
            const result = customer.getDiscountRate();

            // Assert
            expect(result).toBe(0.15);
        });

        test('it returns 0.50 for vip customer', () => {
           // Arrange
            const customer = new Customer('Alice', 'vip');

            // Act
            const result = customer.getDiscountRate();

            // Assert
            expect(result).toBe(0.50);
        });

        test('it returns 0 for business customer', () => {
            // Arrange
            const customer = new Customer('Alice', 'business');

            // Act
            const result = customer.getDiscountRate();

            // Assert
            expect(result).toBe(0);
        });
    });

    describe('method getTaxRate', () => {
        test('it returns 0.21 for regular customer', () => {
            // Arrange
            const customer = new Customer('Alice', 'regular');

            // Act
            const result = customer.getTaxRate();

            // Assert
            expect(result).toBe(0.21);
        });

        test('it returns 0.21 for vip customer', () => {
              // Arrange
            const customer = new Customer('Alice', 'vip');

            // Act
            const result = customer.getTaxRate();

            // Assert
            expect(result).toBe(0.21);
        });

        test('it returns 0.10 for business customer', () => {
               // Arrange
            const customer = new Customer('Alice', 'business');

            // Act
            const result = customer.getTaxRate();

            // Assert
            expect(result).toBe(0.10);
        });
    });

    describe('method getName', () => {
        test('It returns the customer name succesfully', () => {
            // Arrange
            const myCustomer = new Customer('Bob', 'vip');
            // Act
            const result = myCustomer.getName();
            // Assert
            expect(result).toEqual('Bob');
        });
    });
});