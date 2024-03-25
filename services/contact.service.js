import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactDB'

export const contanctService = {
    query,
    getById,
    save,
    remove,
    getEmptyContact
}

function query() {
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
            return contacts
        })
}

function getById(contanctId) {
    return storageService.get(STORAGE_KEY, contanctId)
}

function remove(contanctId) {
    return storageService.remove(STORAGE_KEY, contanctId)
}


function save(contanct) {
    if (contanct._id) {
        return storageService.put(STORAGE_KEY, contanct)
    } else {
        return storageService.post(STORAGE_KEY, contanct)
    }
}

function getEmptycontanct() {
    return {

    }
}