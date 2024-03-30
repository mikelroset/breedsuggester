const languagesMap = {
    'en': 'en_EN',
    'es': 'es_Es',
    'default': 'es_Es',
};

export const setLanguage = (req, res, next) => {
    req.language = languagesMap[req.query.lang] || languagesMap['default'];
    next();
};