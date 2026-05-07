/**
 * Unit test for class Product
 */

import { Product } from "./product.js";

describe('Test of class Product', () => {

    describe('constructor', () => {
        test('it fails when product code is longer than 6 chars', () => {
            // Arrange
            const expectedError = new Error('Product id cannot be longer than 6 characters');
            // Act + Assert
            expect(() => new Product('1234567', 'Product name', 22)).toThrow(expectedError);
        });

        test('it fails when product name is longer than 30 chars', () => {
            // Arrange
            const longName = 'This name is definitely way too long for our product system';
            const expectedError = new Error('Product names cannot have more than 30 characters');
            
            // Act + Assert
            expect(() => new Product('P01', longName, 22)).toThrow(expectedError);
        });

        test('it fails when product price is negative', () => {
            // Arrange
            const expectedError = new Error('Product prices cannot be negative');
            
            // Act + Assert
            expect(() => new Product('P01', 'Valid Name', -5)).toThrow(expectedError);
        });

        test('it instantiates the product successfully', () => {
            // Act
            const result = new Product('code', 'Product name', 22);
            // Assert
            expect(result).toBeInstanceOf(Product);
            expect(result.getId()).toBe('code');
            expect(result.getName()).toBe('Product name');
            expect(result.getPrice()).toBe(22);
        });
    });

    describe('method getId', () => {
        test('It returns the product id successfully', () => {
            // Arrange
            const myProduct = new Product('myId', 'Product name', 22);
            // Act
            const result = myProduct.getId();
            // Assert
            expect(result).toEqual('myId');
        });
    });

    describe('method toString', () => {
        test('It returns the correctly formatted string', () => {
            // Arrange
            const myProduct = new Product('P1', 'Test', 10);
            // Act
            const result = myProduct.toString();
            // Assert
            // Comprobamos que contiene partes clave del formato esperado
            expect(result).toContain('P1');
            expect(result).toContain('Test');
            expect(result).toContain('10.00 €');
        });
    });
});