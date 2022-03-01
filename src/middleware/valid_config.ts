export let valid_config: object = {
    'create': { 
        'id': { 'required': true, 'string': true, 'in': ['body'], 'errorMessage': 'Name is required' },
        'name': { 'required': true, 'string': true, 'in': ['body'], 'errorMessage': 'Name is required' } 
    }, 
    'delete': { 
        'id': { 'required': true, 'string': true, 'errorMessage': 'Id is required', 'in': ['params'] } 
    },
    'getone': { 
        'id': { 'required': true, 'string': true, 'errorMessage': 'Id is required', 'in': ['params'] } 
    },
    'get': { 
        'skip': { 'required': false, 'default': 0, 'number': true, 'in': ['query'], 'errorMessage': 'Skip is invalid' }, 
        'limit': { 'required': false, 'default': 10, 'number': true, 'in': ['query'], 'errorMessage': 'Limit is invalid' } 
    },
    'update': {
        'id': { 'required': true, 'string': true, 'in': ['body'], 'errorMessage': 'Name is required' },
        'dataToUpdate': { 'in': ['body'], 'required': true, 'object': true, 'errorMessage': 'data is required' }
    }
};