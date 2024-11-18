
describe ("test suite ecommerce",()=>{
            
    beforeEach("ingresar al home",()=>{
      cy.visit("https://www.emcali.com.co/")
      cy.url().should("contain", "emcali")
    }) 
      //inicio de sesión usuario no registrado
      
    
       it("ingresar usuario",()=> {
        cy.visit("https://www.emcali.com.co/login")
        cy.url().should("contain","login")
        cy.get("[name='_com_liferay_login_web_portlet_LoginPortlet_login']").type("lucygit2060@gmail.com")
        cy.get("[name='_com_liferay_login_web_portlet_LoginPortlet_password']").type("password")
              
      })

      //ingreso a una opcion del catalogo del submenu
      it("Ingresar opcion atencion-al-usuario", ()=> {
        cy.visit("https://www.emcali.com.co/es/web/guest/bc/-/knowledge_base/atencion-al-usuario/tramites")
        cy.url().should("contain","atencion-al-usuario/tramites") 
         })

      //ingreso a una opciòn  de panel izquierdo de ocpcion de catalogo menu "atenciòn al usuario"
        
      it("Ingresar opcion centros de Atenciòn", ()=> {
        cy.visit("https://www.emcali.com.co/es/bc/-/knowledge_base/atencion-al-usuario/centros-de-atencion")
        cy.url().should("contain","centros-de-atencion")
    })
  })