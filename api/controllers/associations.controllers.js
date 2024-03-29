export const getAssociations = (req, res) => {
    res.send('getAssociations');
};

export const getAssociation = (req, res) => {
    const id = req.params.id;
    res.send(`getAssociation ${id}`);
};

export const createAssociation = (req, res) => {
    res.send('createAssociation');
};

export const updateAssociation = (req, res) => {
    const id = req.params.id;
    res.send(`updateAssociation ${id}`);
};

export const deleteAssociation = (req, res) => {
    const id = req.params.id;
    res.send(`deleteAssociation ${id}`);
};