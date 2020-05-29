/// <reference types="cypress" />

import { getKey } from "apollo-link/lib/linkUtils"

// This block is to make sure this .js file works
describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
  })

  describe('Verifys text on homepage',function() {
    it('verify types of locators',function() {

         // cy.visit("http://goals-www.herokuapp.com/") // This opens the URL
         cy.visit("http://localhost:3000/") // This opens the URL

        // Verifys the text on the Homepage
        cy.get('.sc-AxjAm > h1').should('contain', 'Login')
        cy.get('.sc-fzoXzr > h1').should('contain', 'Welcome to Goals!')
        cy.get('p').should('contain', 'In this game, you can team up and face off against your friends to use competition as motivation to improve your life one goal at a time')
      })

      it('Verifys buttons on the homepage', () => {

        // Verifys buttons on the homepage
        cy.get('#loginButton').should('be.visible') // Verifys the login button
        cy.get('#userRedirect').should('be.visible') // Verifys the "Need to Create A User" button

      })

  })