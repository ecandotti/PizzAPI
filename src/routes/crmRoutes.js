import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact } from '../controllers/crmControllers'

const routes = (app) => {
    app.route('/contact')
        .get((req,res, next) => {
            // Midleware
            console.log(`Request de: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContacts) // Avoir tous les contacts
        
        .post(addNewContact) // Ajouter un contact

    app.route('/contact/:contactId')
        // Contact filtré avec ID
        .get(getContactWithId)

        // Mise à jour contact
        .put(updateContact)

        // Supprimé un contact
        .delete(deleteContact)
}

export default routes