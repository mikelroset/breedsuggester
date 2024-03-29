export const getFamilies = (req, res) => {
    res.send('getFamilies');
};

export const getFamily = (req, res) => {
    const id = req.params.id;
    res.send(`getFamily ${id}`);
};

export const createFamily = (req, res) => {
    res.send('createFamily');
};

export const updateFamily = (req, res) => {
    const id = req.params.id;
    res.send(`updateFamily ${id}`);
};

export const deleteFamily = (req, res) => {
    const id = req.params.id;
    res.send(`deleteFamily ${id}`);
};